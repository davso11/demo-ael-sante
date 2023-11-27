import { ResetPasswordForm } from "../components/reset-password-form";

export const ResetPassword = () => {
  return (
    <main>
      <div className="center-flex gap-x-40">
        <div className="flex flex-1">
          <img
            src="/new-password.svg"
            alt=""
            className="aspect-square w-[28rem]"
          />
        </div>
        <div className="flex-1">
          <ResetPasswordForm />
        </div>
      </div>
    </main>
  );
};
