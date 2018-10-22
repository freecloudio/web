import { User } from "src/models/User";


export async function getCurrentUser(): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    window.setTimeout(() => {
      resolve({name: "Pascal Riesinger", id: 0});
    }, 3000);
  })
}

export async function getUserByID(userID: number): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    window.setTimeout(() => {
      resolve({name: `User ${userID}`, id: userID});
    }, Math.random() * 500);
  })
}

