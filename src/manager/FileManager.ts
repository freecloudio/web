import { File, Directory } from "src/models/File";

export async function getDirectoryContent(fullPath: string): Promise<Array<File | Directory>> {
	return new Promise<Array<File | Directory>>((resolve, reject) => {
		window.setTimeout(() => {
			const a = [];
			for (let i = 0; i < 123; i++) {
				a.push(
					{
						path: `/hello/world/`,
						name: `Test ${i}`,
						size: 123,
						ownerID: Math.ceil(Math.random() * 5),
					},
				);
			}
			resolve(a);
		}, Math.random() * 150);
	});
}
