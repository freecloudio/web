import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function GiftOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 8V21M12 8C12 8 12 6.50722 12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6C16 7.10457 15.1046 8 14 8C13.4027 8 12 8 12 8ZM12 8C12 8 12 6.06291 12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5C7 6.88071 8.11929 8 9.5 8C10.3178 8 12 8 12 8ZM5 12H19M5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10C21 11.1046 20.1046 12 19 12M5 12L5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
