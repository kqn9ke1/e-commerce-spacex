import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { AuthContextTypes, UserCredentialsType } from "./types";
import { UserType } from "../../models/user";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { ADMINS } from "../../utils/consts";
import { notify } from "../../components/common/Toastify/Toastify";

export const authContext = createContext<AuthContextTypes | null>(null);

type AuthContextPropsType = {
  children: ReactNode;
};
const AuthContext: FC<AuthContextPropsType> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);

  const register = async ({ email, password }: UserCredentialsType) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const login = async ({ email, password }: UserCredentialsType) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      notify(error.code);
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      notify(error.code);
      console.log(error.massage);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const isAdmin = () => {
    if (!user) {
      return false;
    }
    return ADMINS.includes(user.email as string);
  };

  const value = {
    user,
    register,
    login,
    logout,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
