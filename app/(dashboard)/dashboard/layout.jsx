import { redirect } from "next/navigation";

import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/dashboard/sidenav";
import { createClient } from "@/utils/supabase/server";
import { UserAccountNav } from "@/components/user-account-btn";
import { siteConfig } from "@/config/site";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    return redirect("/login");
  }

  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grid flex-1 md:grid-cols-[250px_1fr]">
        <aside className="hidden dark:bg-background bg-gray-50 w-[250px] px-4 pb-6 flex-1 h-screen flex-col md:flex border-r">
          <div className="flex h-[60px] items-center">
            <span className="px-2 text-lg font-bold text-foreground">
              {siteConfig.name}
            </span>
          </div>
          <DashboardNav items={dashboardConfig.sidebarNav} />
          <UserAccountNav user={data?.session?.user} signOut={signOut} />
        </aside>
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
