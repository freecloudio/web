import styled from "styled-components";

interface Props {
	name: string;
	imageSrc?: string;
	small?: boolean;
	onClick?: () => void;
}

const StyledAvatar = styled.div<Props>`
	background-color: white;
	border-radius: var(--rounded-full);
	overflow: hidden;
	color: var(--color-dark-text);
	width: ${({ small }) => (small ? "2rem" : "3rem")};
	height: ${({ small }) => (small ? "2rem" : "3rem")};
	line-height: ${({ small }) => (small ? "2rem" : "3rem")};
	text-align: center;
	border: 2px solid var(--color-text-primary);
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

const Avatar = (props: Props) => (
	<StyledAvatar {...props}>
		{props.imageSrc ? (
			<AvatarImage src={props.imageSrc} />
		) : (
			getAvatarName(props.name)
		)}
	</StyledAvatar>
);

export default Avatar;
