import { DashboardHeader } from "@/components/dashboard/header";



export default function SettingsLayout({ children }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <DashboardHeader
        heading="Tests"
        text="Manage your tests."
        editable
      />
      <div className="w-full flex-1 flex flex-col py-4">
        {children}
      </div>
    </div>
  );
}
