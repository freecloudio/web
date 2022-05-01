import clsx from "clsx";

type IconButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  icon: JSX.Element;
  label: string;
};
const IconButton = ({
  variant = "secondary",
  label,
  icon,
}: IconButtonProps) => (
  <button
    aria-label={label}
    className={clsx(
      "w-12 h-12 rounded-md inline-flex items-center justify-center",
      {
        primary: "bg-primary-600 text-neutral-0",
        secondary: "bg-primary-100 text-primary-600",
        tertiary: "border border-neutral-200 text-neutral-700",
      }[variant]
    )}
  >
    {icon}
  </button>
);

export { IconButton, IconButtonProps };
