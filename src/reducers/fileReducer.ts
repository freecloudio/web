import { Action } from '../actions';
import { FileState } from 'src/store/fileStore';

const initialState: FileState = {
	files: {},
	appState: {
		dialogOpen: false,
	},
};

export default function fileReducer(state: FileState = initialState, action: Action): FileState {
	switch (action.type) {
		case 'FETCH_PATH_INFO':
			return {
				...state,
				files: Object.assign({}, state.files, { [action.path]: { isLoading: true } }),
			};
		case 'FETCH_PATH_INFO_DONE':
			return {
				...state,
				files: {
					...state.files,
					[action.path]: {
						isLoading: false,
						content: action.file.content,
						file: action.file.fileInfo,
					},
				},
			};
		case 'FETCH_PATH_INFO_ERROR':
			return {
				...state,
				files: {
					...state.files,
					[action.path]: {
						isLoading: false,
						content: undefined,
						file: undefined,
					},
				},
			};	
		case 'FILES_APP_DIALOG_CHANGE':
			return {
				...state,
				appState: {
					dialogOpen: action.open,
				},
			};
		default:
			return state;
	}
}
