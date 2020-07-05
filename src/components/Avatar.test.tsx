import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from './Avatar';

test('renders a name with only one part', () => {
	const { getByText } = render(<Avatar name="John" />);
	const initials = getByText(/^J$/);
	expect(initials).toBeInTheDocument();
});

test('renders a name with two parts', () => {
	const { getByText } = render(<Avatar name="John Doe" />);
	const initials = getByText(/^JD$/);
	expect(initials).toBeInTheDocument();
});

test('renders the first two initials of a long name', () => {
	const { getByText } = render(<Avatar name="John Doe Mickey Cat" />);
	const initials = getByText(/^JD$/);
	expect(initials).toBeInTheDocument();
});

test('Does not render the initials, if an image source is passed', () => {
const { queryByText } = render(<Avatar name="John Doe Mickey Cat" imageSrc='https://nothing.to.be.seen' />);
	const initials = queryByText(/^JD$/);
	expect(initials).not.toBeInTheDocument();
});
