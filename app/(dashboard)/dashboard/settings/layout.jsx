"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const settings = [
  {
    href: "/dashboard/settings",
    name: "Account Settings",
  },
  {
    href: "/dashboard/settings/preferences",
    name: "Preferences",
  },
];

export default function SettingsLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="w-full flex-1 max-w-5xl mx-auto">
      <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <DashboardHeader heading="Settings" text="Manage account settings." />
        <div className="w-full py-4">
          <div className="mb-4 flex items-center">
            {settings.map((setting, index) => (
              <Link
                href={setting.href}
                key={setting.href}
                className={cn(
                  "flex items-center justify-center rounded-md px-3 py-2 text-center text-sm transition-colors hover:text-primary",
                  pathname?.startsWith(setting.href) ||
                    (index === 0 && pathname === "/dashboard/settings")
                    ? "bg-muted font-medium text-primary"
                    : "text-muted-foreground",
                )}
              >
                {setting.name}
              </Link>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
