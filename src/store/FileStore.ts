import { autorun, observable } from 'mobx';
import { FileApi, PathInfo } from 'src/api';
import { authStore } from './AuthStore';
import { Log } from 'src/Log';

export class FileStore {
	private readonly log = new Log('FileStore');
	private fileAPI: FileApi; 
	@observable private readonly fileCache: { [path: string]: PathInfo } = {};

	constructor() {
		autorun(() => {
			const l = window.location;
			this.fileAPI = new FileApi(authStore.authorizedAPIConfiguration, l.protocol + '//' + l.hostname + ':' + l.port + '/api/v1');
			this.log.debug('Created a new FileApi');
		});
	}

	public async fetchPathInfo(fullPath: string): Promise<PathInfo> {
		this.log.debug('Fetching path info for path', fullPath);
		try {
			const pathInfo = await this.fileAPI.getPathInfo(fullPath);
			this.fileCache[fullPath] = pathInfo;
			this.log.debug('Got info for path', fullPath, '- cache updated');
			return pathInfo;
		} catch (response) {
			if (authStore.checkAuthorizedAPIResponse(response)) {
				this.log.debug('Error getting file info, but was authorized', response);
			} 
			throw response;
		}
	}

	public async getPathInfo(fullPath: string) {
		let cached = this.fileCache[fullPath];
		if (!cached) {
			this.log.debug('Cache miss for part', fullPath);
			cached = await this.fetchPathInfo(fullPath);	
			this.fileCache[fullPath] = cached;
		}
		return cached;
	}

}

export const fileStore = new FileStore();
