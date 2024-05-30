import { createClient } from "@/utils/supabase/server";
import { getServerSession } from "next-auth/next";

export async function getCurrentUser() {
  const session = await createClient(authOptions);

  return session?.user;
}
