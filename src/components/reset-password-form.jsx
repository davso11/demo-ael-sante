import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FormLayout } from "../layouts/form-layout";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmedPassword) {
      return alert("Remplissez tous les champs svp !");
    }

    if (newPassword !== confirmedPassword) {
      return alert("Les deux mots de passe ne correspondent pas");
    }

    console.log({
      newPassword,
      confirmedPassword,
    });

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
              <Label htmlFor="password">Nouveau mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
              <Label htmlFor="password">Confirmer mot de passe</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
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
