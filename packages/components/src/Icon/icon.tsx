import clsx from "clsx";

type IconProps = {
  path: string;
  size?: "sm" | "md" | "lg";
};

const Icon = ({ path, size = "md" }: IconProps) => (
  <svg
    aria-hidden
    fill="currentColor"
    className={clsx({
      "w-4": size === "sm",
      "h-4": size === "sm",
      "w-6": size === "md",
      "h-6": size === "md",
      "w-8": size === "lg",
      "h-8": size === "lg",
    })}
  >
    <path d={path} />
  </svg>
);
export { Icon, IconProps };
