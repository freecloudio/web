import { StyledIcon, StyledIconProps } from "../StyledIcon";

export function VariableOutline(props: StyledIconProps) {
  return (
    <StyledIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M4.87104 4C3.67341 6.40992 3 9.12632 3 12C3 14.8737 3.67341 17.5901 4.87104 20M19.0001 20C20.1977 17.5901 20.8711 14.8737 20.8711 12C20.8711 9.12632 20.1977 6.40992 19.0001 4M9 9H10.2457C10.6922 9 11.0846 9.29598 11.2072 9.72528L12.7928 15.2747C12.9154 15.704 13.3078 16 13.7543 16H15M16 9H15.9199C15.336 9 14.7813 9.25513 14.4014 9.69842L9.59864 15.3016C9.21868 15.7449 8.66398 16 8.08013 16H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
}
