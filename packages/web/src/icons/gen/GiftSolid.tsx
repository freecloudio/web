import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function GiftSolid(props: StyledIconProps) {
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
        d="M5 5C5 3.34315 6.34315 2 8 2C8.76836 2 9.46924 2.28885 10 2.7639C10.5308 2.28885 11.2316 2 12 2C13.6569 2 15 3.34315 15 5C15 5.35064 14.9398 5.68722 14.8293 6H16C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10H11V9C11 8.44772 10.5523 8 10 8C9.44772 8 9 8.44771 9 9V10H4C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6H5.17071C5.06015 5.68722 5 5.35064 5 5ZM9 6V5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6H9ZM12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V6H12Z"
        fill="currentColor"
      />
      <path
        d="M9 11H3V16C3 17.1046 3.89543 18 5 18H9V11Z"
        fill="currentColor"
      />
      <path
        d="M11 18H15C16.1046 18 17 17.1046 17 16V11H11V18Z"
        fill="currentColor"
      />
    </StyledIcon>
  );
}