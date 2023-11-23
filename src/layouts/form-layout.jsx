import { cn } from "../lib/utils";

export const FormLayout = ({
  title,
  subTitle,
  className,
  renderForm,
  ...props
}) => {
  return (
    <div
      className={cn(
        "max-w-[27rem] rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7",
        className,
      )}
      {...props}
    >
      {/* HEADER */}
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800">{title}</h1>
        {subTitle ? (
          <p className="mt-2 text-sm text-gray-600">{subTitle}</p>
        ) : null}
      </div>

      {/* FORM */}
      {renderForm()}
    </div>
  );
};
