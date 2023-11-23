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
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!login || !password) {
      return alert("Remplissez tous les champs svp !");
    }

    console.log({
      login,
      password,
      stayLoggedIn,
    });

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
              <Input
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  <Checkbox
                    id="stay-logged-in"
                    checked={stayLoggedIn}
                    onChange={() => setStayLoggedIn((c) => !c)}
                  />
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
