import { ArrowLeft } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export const AuthFormLayout = () => {
  return (
    <div className="relative top-10 min-h-screen px-4 sm:top-24">
      <div className="mx-auto w-fit space-y-10">
        <Link to="/">
          <ArrowLeft size={16} className="inline-block text-sm" /> Accueil
        </Link>
        <Outlet />
      </div>
    </div>
  );
};
