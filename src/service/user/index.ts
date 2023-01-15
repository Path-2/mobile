import axios from "axios";
import { User } from "../../models/types";

const HOST: string = "http://localhost:8008/";
const USER_URL: string = "api/v1/users";

export async function createUser(user: User) {
  return await axios.post(HOST + USER_URL, user);
}
