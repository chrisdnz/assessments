export function DashboardHeader({ heading, text, children }) {
  return (
    <div className="flex flex-1 items-center justify-between px-2 w-full mx-auto">
      <div className="grid gap-1">
        <h1 className="font-heading text-4xl font-bold">{heading}</h1>
        {text && <p className="text-md text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  );
}
