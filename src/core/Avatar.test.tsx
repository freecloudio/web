import * as React from 'react';

import {mount} from 'enzyme';
import Avatar from './Avatar';

it('renders only the initials', () => {
	const component = mount(<Avatar firstName="John" lastName="Doe"/>);
	expect(component.find('span').getDOMNode().innerHTML).toBe('JD');
	component.unmount();
});

it('uppercases the initials', () => {
	const component = mount(<Avatar firstName="john" lastName="doe"/>);
	expect(component.find('span').getDOMNode().innerHTML).toBe('JD');
	component.unmount();
});

it('handles empty names', () => {
	const component = mount(<Avatar firstName="" lastName=""/>);
	expect(component.find('span').getDOMNode().innerHTML).toBe('');
	component.unmount();
});

it('does not render the initials when an image is given', () => {
	const imgSrc = 'img.jpg';
	const component = mount(<Avatar firstName="john" lastName="doe" imageSrc={imgSrc}/>);
	expect(component.find('img')).toBeTruthy();
	expect(component.find('img').getDOMNode().getAttribute('src')).toEqual(imgSrc);
	expect(component.find('span').length).toBe(0);
	component.unmount();
});
