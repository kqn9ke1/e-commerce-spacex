import { UserType } from "../../models/user";

export type AuthContextTypes = {
  user: UserType;
  register: (Credentials: UserCredentialsType) => void;
  login: (Credential: UserCredentialsType) => void;
  isAdmin: () => boolean;
  logout: () => void;
};

export type UserCredentialsType = {
  email: string;
  password: string;
};
