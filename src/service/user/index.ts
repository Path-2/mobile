import axios from "axios";
import { User } from "../../models/types";

const HOST: string = process.env.API_HOST || "http://localhost:8080/";
const USER_URL: string = "api/v1/users";
const baseURL = HOST + USER_URL;

const userRequest = axios.create({ timeout: 18000 });

export async function createUser(user: User) {
  return await userRequest.post(baseURL, user);
}
