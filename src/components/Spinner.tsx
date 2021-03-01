import styled from "styled-components";
import { Sizable } from "../style/modifiers";
import { sizes } from "../style/utils";

const Container = styled.div<Sizable>`
	width: ${(props) => sizes(props, "1.5rem", "2rem", "3rem")};
	height: ${(props) => sizes(props, "1.5rem", "2rem", "3rem")};
	box-sizing: border-box;
	padding: ${(props) => sizes(props, "0.25rem", "0.25rem", "0.5rem")};
`;

const StyledSVG = styled.svg<Sizable>`
	width: ${(props) => sizes(props, "1rem", "1.5rem", "2rem")};
	height: ${(props) => sizes(props, "1rem", "1.5rem", "2rem")};
`;

/**
 * Simple loading indicator.
 * This indicator was graciously provided by Sam Herbert at https://github.com/SamHerbert/SVG-Loaders
 */
const Spinner = (props: Sizable) => (
	<Container {...props}>
		<StyledSVG
			viewBox="0 0 38 38"
			xmlns="http://www.w3.org/2000/svg"
			stroke="var(--color-primary)"
			{...props}
		>
			<g fill="none" fillRule="evenodd">
				<g transform="translate(1 1)" strokeWidth="2">
					<circle strokeOpacity=".5" cx="18" cy="18" r="18" />
					<path d="M36 18c0-9.94-8.06-18-18-18">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 18 18"
							to="360 18 18"
							dur="1s"
							repeatCount="indefinite"
						/>
					</path>
				</g>
			</g>
		</StyledSVG>
	</Container>
);

export default Spinner;
