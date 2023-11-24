import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MailCheck } from "lucide-react";
import { FormLayout } from "../layouts/form-layout";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Toast } from "./toast";

export const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Remplissez tous les champs svp !");
    }

    toast.custom(
      (t) => (
        <Toast
          t={t}
          title="Adresse mail confirmée"
          message="Vous allez recevoir un mail afin de réinitialiser votre mot de passe."
          LeftIcon={MailCheck}
        />
      ),
      {
        position: "bottom-center",
        duration: 1600,
      },
    );
    setTimeout(() => {
      navigate("/reset-password");
    }, 2000);
  };

  return (
    <FormLayout
      title="Votre adresse mail"
      subTitle="Entrez votre adresse mail pour réinitialiser votre mot de passe"
      renderForm={() => {
        return (
          <form
            className="mt-5 grid gap-y-4"
            autoComplete="off"
            onSubmit={submitHandler}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Valider</Button>
          </form>
        );
      }}
    />
  );
};
