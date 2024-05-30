import postgres from "postgres";
import "dotenv/config";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("Couldn't find db url");
}
const sql = postgres(dbUrl);

async function main() {
  await sql`
  create or replace function public.handle_new_user()
    returns trigger as $$
    declare
    new_user_id int;
    user_name text;
    user_role text;
    company_name text;
    begin
    -- Get user name and role from the new record
    user_name := coalesce(new.raw_user_meta_data->>'name', null);
    user_role := coalesce(new.raw_user_meta_data->>'role', 'COMPANY');
    company_name := coalesce(new.raw_user_meta_data->>'company_name', null);
    
    -- Insert new user into the public.User table and retrieve the inserted id
    insert into public."User" (email, name, role)
    values (new.email, user_name, 
        case user_role
        when 'COMPANY' then 'COMPANY'
        else 'CANDIDATE'
        end::public."Role")
    returning id into new_user_id;

    -- If the role is CANDIDATE, insert into Candidate table
    if (user_role is null or user_role = 'CANDIDATE') then
        insert into public."Candidate" ("userId")
        values (new_user_id);
    end if;

    -- If the role is COMPANY, insert into Company table
    if (user_role = 'COMPANY') then
        insert into public."Company" ("userId", name)
        values (new_user_id, company_name);
    end if;

    return new;
    end;
    $$ language plpgsql security definer;
  `;
  await sql`
    create or replace trigger on_auth_user_created
        after insert on auth.users
        for each row execute procedure public.handle_new_user();
  `;

  await sql`
  create or replace function public.handle_update_user()
    returns trigger as $$
    begin
    -- Update the user in the public.User table
    update public."User"
    set email = new.email,
        name = new.raw_user_meta_data->>'name',
        role = case new.raw_user_meta_data->>'role'
                when 'COMPANY' then 'COMPANY'
                else 'CANDIDATE'
                end::public."Role"
    where id = new.id;

    return new;
    end;
    $$ language plpgsql security definer;
  `;

  await sql`
  create or replace trigger on_auth_user_updated
    after update of email on auth.users
    for each row execute procedure public.handle_update_user();
  `;

  await sql`
    create or replace function public.handle_delete_user()
    returns trigger as $$
    declare
        user_id int;
        user_email text;
    begin
        -- Get the user ID and email from the public.User table
        select id, email into user_id, user_email
        from public."User"
        where email = old.email;
    
        -- Perform deletions if the user exists
        if user_id is not null then
        -- Delete from Candidate table
        delete from public."Candidate" where "userId" = user_id;
    
        -- Delete from Company table
        delete from public."Company" where "userId" = user_id;
    
        -- Delete the user from the User table
        delete from public."User" where email = user_email;
        end if;
    
        return old;
    end;
    $$ language plpgsql security definer;
  `;

  await sql`
    create or replace trigger on_profile_user_deleted
      after delete on auth.users
      for each row execute procedure public.handle_delete_user()
  `;

  console.log("Finished adding triggers and functions for profile handling.");
  process.exit();
}

main();
