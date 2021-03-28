import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function SortDescendingOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M3 4H16M3 8H12M3 12H12M17 8V20M17 20L13 16M17 20L21 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
