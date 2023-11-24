import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FormLayout } from "../layouts/form-layout";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      password: formData.get("new-password"),
      confirmedPassword: formData.get("confirm-password"),
    };
    if (data.password == null || data.confirmedPassword == null) {
      return alert("Remplissez tous les champs svp !");
    }

    if (data.password !== data.confirmedPassword) {
      return alert("Les deux mots de passe ne correspondent pas");
    }

    console.log(data);
    navigate("/");
  };

  return (
    <FormLayout
      title="Réinitialisation du mot de passe"
      subTitle="Veuillez rentrer votre nouveau mot de passe puis le valider"
      renderForm={() => {
        return (
          <form
            className="mt-5 grid gap-y-4"
            autoComplete="off"
            onSubmit={submitHandler}
          >
            {/* NEW PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="new-password">Nouveau mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="new-password"
                  name="new-password"
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

            {/* CONFIRM PASSWORD */}
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmer mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
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

            <Button type="submit">Valider</Button>
          </form>
        );
      }}
    />
  );
};
