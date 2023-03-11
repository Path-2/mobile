export type InputProps = {
  icon: string;
  option?: { child: React.ReactNode; action: () => void };
  type: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  limit?: number;
  style?: { backgroundColor?: string; color?: string };
  onChange: (newValue: any) => void;
};

export type Route = {
  start: Stop;
  end: Stop;
  cost: { min: number; average?: number; max: number };
  time: { min: number; average?: number; max?: number };
};

export type Stop = {
  name: string;
  coordinates: { lat: number; lon: number };
};

export type User = {
  id?: number;
  username?: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
};

export type UserCreateResponse = {
  data?: any;
  headers: { token: string };
  status: number;
};

export type FacebookUserData = {
  first_name: string;
  last_name: string;
  name: string;
  profile_picture: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  id: string;
};

export type GoogleUserData = {
  first_name: string;
  last_name: string;
  name: string;
  profile_picture: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  id: string;
};

export type LoginData = {
  username?: string;
  password?: string;
};

export type UserToken = {
  jwt: string;
};

export type SocialAuth = {
  token: string | undefined;
  url?: string;
};

export type SocialButtonProps = {
  onSuccess: (authData: SocialAuth | undefined) => Promise<void>;
  onFailure?: (failData: any | undefined) => Promise<void>;
};

export type UserSocial = {
  token: string;
  type: UserSource;
};

export enum UserSource {
  FACEBOOK = "FACEBOOK",
  GOOGLE = "GOOGLE",
}
