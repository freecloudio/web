import styled from 'styled-components';

interface Props {
	dir?: 'row'|'column'|'row-reverse'|'column-reverse';
	items?: 'flex-start'|'flex-end'|'center'|'stretch'|'baseline';
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	content?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'baseline';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const FlexBox = styled.div<Props>`
	display: flex;
	flex-direction: ${props => props.dir || 'row'};
	align-items: ${props => props.items || 'stretch'};
	justify-content: ${props => props.justify || 'flex-start'};
	align-content: ${props => props.content || 'stretch'};
	flex-wrap: ${props => props.wrap || 'nowrap'};
	box-sizing: border-box;
`;

export default FlexBox;
