import UsersRepository from "../repositories-interface/users-repository-interface";
import { UsersAPI } from "../providers/users-api";
import { User } from "../models/user";

export default class UserRepositoryImpl implements UsersRepository {
  private usersAPI!: UsersAPI;

  constructor(usersAPI: UsersAPI) {
    this.usersAPI = usersAPI;
  }

  getUsers(): Promise<User[]> {
    return this.usersAPI.listUsers();
  }
  getUserById(userId: number): Promise<User | null> {
    return this.usersAPI.user(userId);
  }
}
