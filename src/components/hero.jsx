import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1 className="title text-center">
        Bienvenue sur la plateforme <br className="lg:hidden" />
        AEL SANTÉ
      </h1>
      <p className="desc text-center ">
        Connectez-vous ou faites une demande de cotation
      </p>
      <div className="flex flex-col justify-center gap-x-6 gap-y-3 sm:flex-row">
        <Button
          variant="secondary"
          className="text-black"
          onClick={() => navigate("/quote-request")}
        >
          Demande de cotation
        </Button>
        <Button onClick={() => navigate("/login")}>Connexion</Button>
      </div>
    </div>
  );
};
