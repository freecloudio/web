import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function SortAscendingOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M3 4H16M3 8H12M3 12H9M13 12L17 8M17 8L21 12M17 8V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
