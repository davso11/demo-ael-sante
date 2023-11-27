import { LoginForm } from "../components/login-form";

export const Login = () => {
  return (
    <main>
      <div className="center-flex gap-x-40">
        <div className="flex flex-1">
          <img src="/login.svg" alt="" className="aspect-square w-[28rem]" />
        </div>
        <div className="flex-1">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};
