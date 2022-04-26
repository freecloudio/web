import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function MinusSolid(props: StyledIconProps) {
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
        d="M3 10C3 9.44772 3.44772 9 4 9L16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11L4 11C3.44772 11 3 10.5523 3 10Z"
        fill="currentColor"
      />
    </StyledIcon>
  );
}
