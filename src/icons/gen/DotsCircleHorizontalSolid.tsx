import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function DotsCircleHorizontalSolid(props: StyledIconProps) {
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
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7 9H5V11H7V9ZM15 9H13V11H15V9ZM9 9H11V11H9V9Z"
        fill="currentColor"
      />
    </StyledIcon>
  );
}
