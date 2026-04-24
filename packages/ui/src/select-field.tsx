import * as React from "react";
import { cn } from "./lib/utils";

export type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
};

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2",
          error
            ? "border-red-300 focus-visible:ring-red-200"
            : "border-zinc-200 focus-visible:border-blue-500 focus-visible:ring-blue-500/20",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  },
);
SelectField.displayName = "SelectField";

export { SelectField };
