import { cn } from "../../lib/utils";

export const Label = ({ htmlFor, className, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("inline-block text-sm", className)}
      {...props}
    >
      {children}
    </label>
  );
};
