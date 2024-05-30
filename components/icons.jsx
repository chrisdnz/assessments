import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowRight,
  Cable,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Home,
  Image,
  Laptop,
  Loader2,
  Moon,
  MoreVertical,
  Palette,
  Pizza,
  Plus,
  Rocket,
  Settings,
  Shield,
  SunMedium,
  Trash,
  Unplug,
  User,
  UserPlus,
  X,
} from "lucide-react";

export const Icons = {
  logo: ({ className }) => (
    <svg
      viewBox="0 0 256 222"
      className={cn("fill-foreground w-8 h-8", className)}
      width="256"
      height="222"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path d="m128 0 128 221.705H0z" />
    </svg>
  ),
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  rocket: Rocket,
  shield: Shield,
  palette: Palette,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  check: Check,
  home: Home,
  addUser: UserPlus,
  cable: Cable,
  plug: Unplug
};
