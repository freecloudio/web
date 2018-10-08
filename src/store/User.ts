import { observable, computed } from "mobx";
import { getCurrentUser } from "src/manager/UserManager";
import { User } from "src/models/User";

export class UserStore {

  @observable public currentUser: User = { name: "" }; 

  constructor() {
    this.fetchCurrentUser();
  }


  @computed get currentUserInitials(): string {
    if (this.currentUser.name === "") {
      return "";
    }
    return this.currentUser.name.split(" ").map((part, idx) => idx >= 2 ? "" : part[0].toUpperCase()).join("");
  }
  
  public async fetchCurrentUser(): Promise<void> {
    this.currentUser = await getCurrentUser();
  }
}

export const userStore = new UserStore();