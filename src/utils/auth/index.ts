import { UserToken } from "../../models/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function setToken(data: UserToken) {
  AsyncStorage.setItem("token", JSON.stringify(data));
}

export function logout() {
  AsyncStorage.removeItem("token")
}

export async function getToken() {
  let token = await AsyncStorage.getItem("token");

  if (!token) return null;

  return JSON.parse(token) as UserToken;
}

export async function isAuthenticated() {
  return (await AsyncStorage.getItem("token")) !== null;
}
