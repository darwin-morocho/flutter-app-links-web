import { User } from "../models/user";

export default interface UsersRepository {
  getUsers(): Promise<User[]>;
  getUserById(userId:number): Promise<User | null>;
}
