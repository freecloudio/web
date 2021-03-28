import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function VolumeOffOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.58579 15.0001H4C3.44772 15.0001 3 14.5523 3 14.0001V10.0001C3 9.44777 3.44772 9.00005 4 9.00005H5.58579L10.2929 4.29294C10.9229 3.66298 12 4.10915 12 5.00005V19.0001C12 19.891 10.9229 20.3371 10.2929 19.7072L5.58579 15.0001Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14L19 12M19 12L21 10M19 12L17 10M19 12L21 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}