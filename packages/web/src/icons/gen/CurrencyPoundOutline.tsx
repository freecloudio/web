import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function CurrencyPoundOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M15 9C15 7.89543 14.1046 7 13 7C11.8954 7 11 7.89543 11 9V14C11 15.1046 10.1046 16 9 16H15M9 12H13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
