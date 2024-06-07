import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

export function DashboardHeader({ heading, editable, text, badges, children }) {
  return (
    <div className="flex items-center justify-between px-2 w-full mx-auto">
      <div className="grid gap-1">
        {editable ? (
          <Input
            className="text-4xl font-semibold"
            variant="ghost"
            placeholder={heading}
            value={heading}
          />
        ) : (
          <h1 className="font-heading text-4xl font-bold">{heading}</h1>
        )}
        {text && <p className="text-md text-muted-foreground">{text}</p>}
        {badges && (
          <div className="flex gap-2 mt-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
