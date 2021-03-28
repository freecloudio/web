import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function FlagOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M3 21V17M3 17V5C3 3.89543 3.89543 3 5 3H11.5L12.5 4H21L18 10L21 16H12.5L11.5 15H5C3.89543 15 3 15.8954 3 17ZM12 3.5V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
