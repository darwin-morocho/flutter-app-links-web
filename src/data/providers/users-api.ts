import axios from "axios";
import { User } from "../models/user";

export class UsersAPI {
  async listUsers(): Promise<User[]> {
    try {
      const response = await axios({
        url: "https://reqres.in/api/users",
        method: "GET",
      });
      return response.data.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  async user(id: number): Promise<User | null> {
    try {
      const response = await axios({
        url: `https://reqres.in/api/users/${id}`,
        method: "GET",
      });
      return response.data.data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
