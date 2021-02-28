import styled from 'styled-components';

const IconButton = styled.button<{toggled?: boolean}>`
	display: inline-flex;
	background: ${props => props.toggled ? 'var(--color-primary-muted)' : 'transparent'};
	color: white;
	border: none;
	border-radius: 100%;
	width: 3rem;
	height: 3rem;
	outline: none;
	appearance: none;
	cursor: pointer;
	box-sizing: border-box;
	font-family: inherit;
	font-weight: inherit;
	text-align: left;
	align-items: center;
	justify-content: center;
	transition: all .1s ease-in-out;

	&:hover {
		background: var(--color-primary-muted);
	}
`;

export default IconButton
