import { RootStore } from "./rootStore";
import { observable, action, runInAction, computed } from "mobx";
import { IProfile } from "../models/profile";
import agent from "../api/agent";

export default class ProfileStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable profile: IProfile | null = null;
  @observable loadingProfile = true;

  @computed get isCurrentUser() {
    if (this.rootStore.userStore.user && this.profile) {
      console.log("store", this.rootStore.userStore.user.username);
      console.log("profile", this.profile.username);
      return this.rootStore.userStore.user.username === this.profile.username;
    } else {
      return false;
    }
  }

  @action loadProfile = async (username: string) => {
    this.loadingProfile = true;
    try {
      const profile = await agent.Profiles.get(username);
      runInAction("loading profile", () => {
        this.profile = profile;
        this.loadingProfile = false;
      });
    } catch (error) {
      runInAction("load profile error", () => {
        this.loadingProfile = false;
      });
      console.log(error);
    }
  };
}
