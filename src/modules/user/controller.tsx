import { observable, action, makeObservable } from "mobx";
import { User } from "../../data/models/user";
import Get from "../../libs/get";
import UsersRepository from "../../data/repositories-interface/users-repository-interface";

export default class UserController {
  private usersRepository = Get.find<UsersRepository>("users");

  @observable fetching = false;
  @observable user: User | null = null;

  constructor() {
    makeObservable(this);
  }

  @action
  async load(userId: number): Promise<void> {
    this.fetching = true;
    this.user = await this.usersRepository.getUserById(userId);
    this.fetching = false;
  }
}
