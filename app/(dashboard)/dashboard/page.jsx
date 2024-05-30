import { redirect } from "next/navigation";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/header";
import { createClient } from "@/utils/supabase/server";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    redirect("/login");
  }

  return (
    <div className="grid max-w-5xl mx-auto items-start gap-8 px-6 py-8">
      <DashboardHeader
        heading="Setup your application"
        text="Follow the steps below to get started with your application."
      />
      <div className="w-full py-4">
        <section className="mt-12">
          <div className="gap-8 md:grid md:grid-cols-3">
            <Card>
              <div className="flex justify-between p-4">
                <div>
                  <CardHeader className="p-0 pb-0">
                    <CardTitle className="text-lg text-foreground font-semibold">Create an API</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-0">
                    <p className="mt-1 text-base text-foreground/50 font-normal">
                      Create an API to start building your application.
                    </p>
                  </CardContent>
                </div>
                <Icons.cable className="mr-4 w-12 h-12 text-foreground opacity-40" strokeWidth={1} />
              </div>
              <CardFooter className="p-4">
                <Button>Create API</Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="flex justify-between p-4">
                <div>
                  <CardHeader className="p-0 pb-0">
                    <CardTitle className="text-lg text-foreground font-semibold">Connect your API</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-0">
                    <p className="mt-1 text-base text-foreground/50 font-normal">
                      Connect your API to start building your application.
                    </p>
                  </CardContent>
                </div>
                <Icons.plug className="mr-4 w-12 h-12 text-foreground opacity-40" strokeWidth={1} />
              </div>
              <CardFooter className="p-4">
                <Button>Connect</Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="flex justify-between p-4">
                <div>
                  <CardHeader className="p-0 pb-0">
                    <CardTitle className="text-lg text-foreground font-semibold">Edit Your Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-0">
                    <p className="mt-1 text-base text-foreground opacity-50 font-normal">
                      Update your profile information.
                    </p>
                  </CardContent>
                </div>
                <Icons.addUser className="mr-4 w-8 h-8 text-foreground opacity-40" strokeWidth={1} />
              </div>
              <CardFooter className="p-4">
                <Button>Edit Profile</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
