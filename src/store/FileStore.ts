import { observable } from "mobx";
import { File, Directory } from "../models/File";
import * as mgr from "../manager/FileManager";
import { UserStore, userStore } from "./UserStore";

export class FileStore {
	@observable public currentDirectoryContent: Array<File | Directory> = [];

	constructor(private users: UserStore) {

	}

	public async fetchCurrentDirectory(fullPath: string): Promise<void> {
		this.currentDirectoryContent = await mgr.getDirectoryContent(fullPath) as Array<File | Directory>;

		for (const file of this.currentDirectoryContent) {
			const fileOwner = await this.users.getUserByID(file.ownerID);
			file.ownerName = fileOwner.name;
		}
	}
}

export const fileStore = new FileStore(userStore);
