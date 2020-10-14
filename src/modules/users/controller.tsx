import { observable, action, makeObservable } from "mobx";
import { User } from "../../data/models/user";
import Get from "../../libs/get";
import UsersRepository from "../../data/repositories-interface/users-repository-interface";

export default class UsersController {
  private usersRepository = Get.find<UsersRepository>("users");

  @observable fetching = true;
  @observable users: User[] = [];

  constructor() {
    makeObservable(this);
    this.load();
  }

  @action
  async load(): Promise<void> {
    const users = await this.usersRepository.getUsers();
    this.users = [...users];
    this.fetching = false;
  }
}
