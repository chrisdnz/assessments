import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ProfileForm from "./form";

export const metadata = {
  title: "Settings",
};

export default async function DashboardPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <ProfileForm />
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-foreground/70">
            Manage your account settings and preferences.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">Delete account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
