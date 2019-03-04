import * as React from 'react';

import {shallow} from 'enzyme';
import Avatar from 'src/core/Avatar';

it('renders only the initials', () => {
	const component = shallow(<Avatar firstName="John" lastName="Doe"/>);
	expect(component.find('span')).toHaveText('JD');
	component.unmount();
});

it('uppercases the initials', () => {
	const component = shallow(<Avatar firstName="john" lastName="doe"/>);
	expect(component.find('span')).toHaveText('JD');
	component.unmount();
});

it('handles empty names', () => {
	const component = shallow(<Avatar firstName="" lastName=""/>);
	expect(component.find('span')).toHaveText('');
	component.unmount();
});

it('does not render the initials when an image is given', () => {
	const imgSrc = 'img.jpg';
	const component = shallow(<Avatar firstName="john" lastName="doe" imageSrc={imgSrc}/>);
	expect(component.find('img')).not.toBeEmptyRender();
	expect(component.find('img')).toHaveProp('src', imgSrc);
	expect(component.find('span')).not.toExist();
	component.unmount();
});
