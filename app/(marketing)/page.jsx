import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

const isSupabaseConnected = () => {
  try {
    return createClient();
  } catch (error) {
    return false;
  }
};

export default () => (
  <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
    <div className="container flex max-w-[60rem] flex-col items-center gap-4">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Effortlessly Assess Potential Candidates
        </h1>
        <p className="max-w-[60rem] text-gray-500 md:text-xl dark:text-gray-400">
          Our SaaS platform streamlines the candidate assessment process,
          empowering companies to make informed hiring decisions with ease.
        </p>
        <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
          Get Started
        </Link>
      </div>
    </div>
  </section>
)
