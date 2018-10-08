import { User } from "src/models/User";


export async function getCurrentUser(): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    window.setTimeout(() => {
      resolve({name: "Pascal Riesinger"})
    }, 3000);
  })

}

