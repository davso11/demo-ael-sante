import { X } from "lucide-react";
import { toast } from "react-hot-toast";

export const Toast = ({ t, title, message, LeftIcon }) => {
  return (
    <div
      className={`max-w-[23rem] rounded-xl border border-gray-200 bg-white shadow-md ${
        t.visible
          ? "animate-in slide-in-from-bottom duration-300"
          : "animate-out fade out"
      }`}
      role="alert"
    >
      <div className="flex items-start gap-x-4 p-4">
        <div className="shrink-0 rounded-full bg-primary/10 p-2">
          <LeftIcon size={16} strokeWidth={3} className="text-primary" />
        </div>

        <div>
          <h3 className="text-sm font-medium text-primary">{title}</h3>
          <p className="mt-1.5 text-sm text-gray-600">{message}</p>
        </div>

        <X
          size={16}
          className="shrink-0 cursor-pointer"
          onClick={() => toast.dismiss(t.id)}
        />
      </div>
    </div>
  );
};
