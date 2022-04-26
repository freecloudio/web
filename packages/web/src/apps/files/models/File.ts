export default interface File {
	type: "directory" | "file";
	name: string;
	size: number;
	sharedWith?: string[];
	starred: boolean;
	lastModified?: Date;
	id: string;
}
