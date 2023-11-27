import { ForgetPasswordForm } from "../components/forget-password-form";

export const ForgetPassword = () => {
  return (
    <main>
      <div className="center-flex gap-x-40">
        <div className="flex flex-1">
          <img
            src="/forget-password.svg"
            alt=""
            className="aspect-square w-[28rem]"
          />
        </div>
        <div className="flex-1">
          <ForgetPasswordForm />
        </div>
      </div>
    </main>
  );
};
