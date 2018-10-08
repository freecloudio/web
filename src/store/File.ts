import { observable } from "mobx";
import { Directory } from "src/models/File";
import { getDirectoryContent } from "src/manager/FileManager";

export class FileStore {
  @observable public currentDirectoryContent: Array<File | Directory> = [];

  public async fetchCurrentDirectory(fullPath: string): Promise<void> {
    this.currentDirectoryContent = await getDirectoryContent(fullPath) as Array<File | Directory>;
  }
}

export const fileStore = new FileStore();