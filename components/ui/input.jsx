import * as React from "react"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-ful rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "ring-offset-background border border-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "bg-transparent ring-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none px-0",
      },
    },
    defaultVariants: {
      variant: "default"
    },
  }
)

const Input = React.forwardRef(({ className, variant, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
