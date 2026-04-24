import * as React from "react";
import { cn } from "./lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-zinc-200/80 bg-white p-6 text-zinc-900 shadow-sm sm:p-8",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-6 text-center", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export { Card, CardHeader };
