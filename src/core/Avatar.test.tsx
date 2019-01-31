import * as React from "react";

import {mount} from 'enzyme';

import Avatar from "./Avatar";

it("renders with a name", () => {
	const component = mount(<Avatar name='John Doe'/>);

	expect(component
		.find('span')
		.getDOMNode()
		.innerHTML).toBe('John Doe');

	component.unmount();
});
