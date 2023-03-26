import axios, { HttpStatusCode } from "axios";
import { Platform } from "react-native";

import { LoginData, User, UserToken } from "../../models/types";
import { getToken } from "../../utils/auth";
import { SocialAuth, UserSocial } from "./../../models/types";

const HOST: string =
  process.env.API_HOST || Platform.OS === "web"
    ? "http://localhost:8080/api/v1/"
    : "http://wkst480dsi51:8080/api/v1/";
const FACEBOOK_HOST = "https://graph.facebook.com/me";
const USER_URL: string = "users";
const PATH2_LOGIN_URL: string = "auth/login";

const userRequest = axios.create({ timeout: 18000 });
const facebookRequest = axios.create({ timeout: 18000 });
const path2LoginRequest = axios.create({ timeout: 18000 });
const googleRequest = axios.create({
  timeout: 18000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "*",
  },
});

export async function createUser(user: User) {
  return await userRequest.post(HOST + USER_URL + "/signup", user);
}

export async function getUserDataFromFacebook(accessToken: string) {
  const { data } = await facebookRequest.get(FACEBOOK_HOST, {
    params: {
      fields: "id,name,last_name,first_name",
      access_token: accessToken,
    },
  });

  return data;
}

export async function getUserDataFromGoogle(accessToken: string, url: string) {
  try {
    const { data } = await googleRequest.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    console.error((error as Error).message);
  }
  return null;
}

export async function login(loginData: LoginData): Promise<UserToken | null> {
  try {
    const { data, status } = await path2LoginRequest.post(
      HOST + PATH2_LOGIN_URL,
      loginData
    );

    if (status !== 200) return null;

    return data as UserToken;
  } catch (error: any) {
    return null;
  }
}

export async function googleLogin(
  googleData: SocialAuth
): Promise<UserToken | null> {
  let token: UserToken;
  try {
    const { data, status } = await axios.get(HOST + PATH2_LOGIN_URL, {
      headers: {
        google_token: googleData.token,
      },
    });
    if (status !== HttpStatusCode.Ok) return null;

    token = data as UserToken;
  } catch (error: any) {
    return null;
  }

  return token;
}

export async function fbLogin(fbData: SocialAuth): Promise<UserToken | null> {
  let token: UserToken;
  try {
    const { data, status } = await axios.get(HOST + PATH2_LOGIN_URL, {
      headers: {
        facebook_token: fbData.token,
      },
    });

    if (status !== HttpStatusCode.Ok) return null;

    token = data as UserToken;
  } catch (error: any) {
    return null;
  }

  return token;
}

export async function createUserWithSocial(
  user: UserSocial
): Promise<UserToken | null> {
  console.log(user);

  try {
    const { status, headers } = await userRequest.post(
      HOST + USER_URL + "/signup/social",
      user
    );

    if (status !== HttpStatusCode.Created) return null;

    return { jwt: (headers as any).token };
  } catch (error: any) {
    return null;
  }
}

export async function getUserData() {
  const { data } = await axios.get(HOST + USER_URL + "/me", {
    headers: {
      authentication: (await getToken())?.jwt,
    },
  });

  console.log(data)

  return data;
}
