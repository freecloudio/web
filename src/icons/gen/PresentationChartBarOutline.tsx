import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function PresentationChartBarOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M8 13V12M12 13V10M16 13V8M8 21L12 17L16 21M3 4H21M4 4H20V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}