"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import { Icons } from "./icons";

export function UserAuthForm({ className, shouldCreateUser, ...props }) {
  const supabase = createClient();
  const form = useForm({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(data) {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: data.email.toLowerCase(),
      options: {
        shouldCreateUser,
        emailRedirectTo: `${window.location.origin}/auth/callback`
      },
    });

    setIsLoading(false);

    if (error) {
      return toast({
        title: "Something went wrong.",
        description: error.message,
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="grid gap-2">
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <button className={cn(buttonVariants())} disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {shouldCreateUser ? "Sign Up" : "Sign In"} with Email
                </button>
              </div>
            )}
          />
        </form>
      </Form>
      <div className="flex-col gap-4 hidden">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        {/* Add providers buttons */}
      </div>
    </div>
  );
}
