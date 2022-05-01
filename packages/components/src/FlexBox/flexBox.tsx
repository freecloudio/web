import clsx from "clsx";

type FlexBoxProps = {
  children?: JSX.Element;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
};

const FlexBox = ({ children, direction = "row" }: FlexBoxProps) => (
  <div
    className={clsx({
      "flex-row": direction === "row",
      "flex-row-reverse": direction === "row-reverse",
      "flex-col": direction === "column",
      "flex-col-reverse": direction === "column-reverse",
    })}
  >
    {children}
  </div>
);

export { FlexBox, FlexBoxProps };
