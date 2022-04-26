import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function ArrowCircleDownOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M15 13L12 16M12 16L9 13M12 16L12 8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
