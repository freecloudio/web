import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function InboxSolid(props: StyledIconProps) {
  return (
    <StyledIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3H5ZM5 5L15 5V12H13L12 14H8L7 12H5V5Z"
        fill="currentColor"
      />
    </StyledIcon>
  );
}
