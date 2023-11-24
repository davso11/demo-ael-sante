import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FormLayout } from "../layouts/form-layout";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export const LoginForm = ({ className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      login: formData.get("login"),
      password: formData.get("password"),
      stayLoggedIn: formData.get("stay-logged-in") ? true : false,
    };

    if (!data.login || !data.password) {
      return alert("Remplissez tous les champs svp !");
    }

    console.log(data);
    navigate("/home");
  };

  return (
    <FormLayout
      title="Connectez-vous"
      subTitle="Connectez-vous pour avoir accès à votre portail"
      renderForm={() => {
        return (
          <form
            {...props}
            className={cn("mt-5 grid gap-y-4", className)}
            autoComplete="off"
            onSubmit={submitHandler}
          >
            {/* LOGIN */}
            <div className="space-y-2">
              <Label htmlFor="login">Login</Label>
              <Input id="login" name="login" required />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                />
                <div onClick={() => setShowPassword((c) => !c)}>
                  {showPassword ? (
                    <Eye
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                    />
                  ) : (
                    <EyeOff
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-x-4 text-sm">
              {/* CHECKBOX */}
              <div className="inline-flex items-center">
                <div className="flex">
                  <Checkbox id="stay-logged-in" name="stay-logged-in" />
                </div>
                <div className="ms-3">
                  <label htmlFor="stay-logged-in">Rester connecté</label>
                </div>
              </div>

              <Link to="/forget-password" className="text-blue-600">
                Mot de passe oublié
              </Link>
            </div>

            <Button type="submit">Se connecter</Button>
          </form>
        );
      }}
    />
  );
};
