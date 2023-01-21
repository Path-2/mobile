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
