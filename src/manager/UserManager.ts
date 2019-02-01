import { User } from "src/api";

export async function getCurrentUser(): Promise<User> {
	return new Promise<User>((resolve, reject) => {
		window.setTimeout(() => {
			resolve({firstName: "Pascal", lastName: "Riesinger", ID: 0});
		}, 3000);
	});
}

export async function getUserByID(userID: number): Promise<User> {
	return new Promise<User>((resolve, reject) => {
		window.setTimeout(() => {
			resolve({firstName: `First${userID}`, lastName: "User", ID: userID});
		}, Math.random() * 500);
	});
}
