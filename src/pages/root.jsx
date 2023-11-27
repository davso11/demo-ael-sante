import { Hero } from "../components/hero";

export const Root = () => {
  return (
    <main className="min-h-screen px-4">
      <Hero />
      <div className="absolute bottom-0 left-1/2 aspect-square w-[35rem] -translate-x-1/2 transform">
        <img
          src="/home.svg"
          alt="Illustration de la page d'accueil"
          className="h-full w-full"
        />
      </div>
    </main>
  );
};
