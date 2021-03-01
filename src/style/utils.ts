import { Colorizable, Sizable, Size } from "./modifiers";

export function getBackgroundColor(colorizable: Colorizable, fallback: any) {
	if (colorizable.negative) {
		return `var(--color-negative-accent)`;
	}
	if (colorizable.primary) {
		return `var(--color-primary-accent)`;
	}
	return `var(${fallback})`;
}

export function getForegroundColor(colorizable: Colorizable, fallback: any) {
	if (colorizable.negative) {
		return `var(--color-negative)`;
	}
	if (colorizable.primary) {
		return `var(--color-primary)`;
	}
	return `var(${fallback})`;
}

export function getShadowColor(colorizable: Colorizable, fallback: any) {
	if (colorizable.negative) {
		return `var(--color-negative-shadow)`;
	}
	if (colorizable.primary) {
		return `var(--color-primary-shadow)`;
	}
	return `var(${fallback})`;
}

export function sizableToSize(sizable: Sizable): Size {
	if (sizable.large) {
		return Size.Large;
	}
	if (sizable.small) {
		return Size.Small;
	}
	return Size.Default;
}

export function sizes(sizeable: Sizable, small: any, normal: any, large: any) {
	switch (sizableToSize(sizeable)) {
		case Size.Large:
			return large;
		case Size.Small:
			return small;
		default:
			return normal;
	}
}
