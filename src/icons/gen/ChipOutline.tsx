import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function ChipOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19ZM9 9H15V15H9V9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
