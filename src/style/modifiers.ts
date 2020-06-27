/**
* This interface is meant for components that should be able to be colorized.
* Note that the default is inherently given. The options are sorted by descending precedence.
*/
export interface Colorizable {
	negative?: boolean;
	primary?: boolean;
}

export enum Size {
	Default,
	Small,
	Large,
}

export interface Sizable {
	small?: boolean;
	large?: boolean;
}
