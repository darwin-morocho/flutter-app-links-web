import Get from "./get";
import UsersRepository from "../data/repositories-interface/users-repository-interface";
import { UsersAPI } from "../data/providers/users-api";
import UserRepositoryImpl from "../data/repositories/users-repository";

export const initDependencies = (): void => {
  const usersRepository = new UserRepositoryImpl(new UsersAPI());
  Get.put<UsersRepository>(usersRepository, "users");
};
