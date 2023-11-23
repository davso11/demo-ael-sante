import { forwardRef } from "react";

export const Checkbox = forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      className="shrink-0 rounded border-gray-200 text-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
      {...props}
      type="checkbox"
    />
  );
});
