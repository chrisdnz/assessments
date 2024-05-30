"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userProfileSchema } from "@/lib/validations/profile-settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(userProfileSchema),
  });
  return (
    <>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button>
            Save Changes
        </Button>
      </CardFooter>
    </>
  );
}
