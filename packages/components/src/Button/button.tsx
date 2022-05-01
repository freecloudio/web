import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "lg" | "md" | "s";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ variant = "secondary", children, onClick }: ButtonProps) => (
  <button
    className={clsx("px-4 py-3 text-sm font-semibold rounded-md", {
      "bg-primary-600": variant === "primary",
      "text-neutral-0": variant === "primary",
      "bg-primary-100": variant === "secondary",
      "text-primary-600": variant === "secondary",
      "border border-neutral-200": variant === "tertiary",
      "text-neutral-700": variant === "tertiary",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export { Button, ButtonProps };
