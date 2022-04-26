import { ReactNode } from "react";

type Props = {
  primary?: boolean;
  children: ReactNode;
};

const Button = ({ primary, children }: Props) => (
  <button className="p-4 text-sm font-semibold uppercase rounded bg-primary-700 text-neutral-100">
    {children}
  </button>
);

export { Button, Props };
