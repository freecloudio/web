import styled from "styled-components";

export interface AvatarProps {
  name: string;
  imageSrc?: string;
  small?: boolean;
  onClick?: () => void;
}

// TODO: Add more colors here
const avatarColors = ["--palette-red-50", "--palette-blue-50"];

function nameToNumber(name: string): number {
  return name
    .split("")
    .map((char) => char.charCodeAt(0))
    .reduce((counter, current) => counter + current, 0);
}

function colorFromName(name: string) {
  return avatarColors[nameToNumber(name) % avatarColors.length];
}

// FIXME: This flex-shrink definition is used as a workaround in the AppBar.
//				It can be removed by adding customizable widths/heights to the Box component (not 100%)
const StyledAvatar = styled.div<AvatarProps>`
  background-color: hsl(var(${({ name }) => colorFromName(name)}));
  border-radius: var(--rounded-full);
  overflow: hidden;
  color: var(--color-text-primary);
  width: ${({ small }) => (small ? "2rem" : "3rem")};
  height: ${({ small }) => (small ? "2rem" : "3rem")};
  line-height: ${({ small }) => (small ? "2rem" : "3rem")};
  text-align: center;
  border: 2px solid var(--color-text-primary);
  cursor: default;
  flex-shrink: 0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

// TODO: Use something like useMemo to avoid calculating this on every redraw
/**
 * Computes the initials for a given name.
 * Only the first two parts of the full name are taken into consideration
 */
function getAvatarName(fullname: string) {
  const parts = fullname.split(" ");
  const initials = parts.map((part) => part[0].toUpperCase());
  return initials.reduce(
    (name, part, index) => (index >= 2 ? name : name + part),
    ""
  );
}

const Avatar = (props: AvatarProps) => (
  <StyledAvatar {...props} title={props.name}>
    {props.imageSrc ? (
      <AvatarImage src={props.imageSrc} />
    ) : (
      getAvatarName(props.name)
    )}
  </StyledAvatar>
);

export default Avatar;
