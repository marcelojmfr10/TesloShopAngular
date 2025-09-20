import { User } from "./user.inteface";

export interface AuthResponse {
  user: User;
  token: string;
}

