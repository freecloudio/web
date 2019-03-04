import { FileInfo } from '../api';

interface FilePathInfo {
	isLoading: boolean;
	file?: FileInfo;
	content?: FileInfo[];
}

interface FilesByPath { [path: string]: FilePathInfo; }

export interface FileState {
	files: FilesByPath;
	appState: {
		dialogOpen: boolean,
	};
}
