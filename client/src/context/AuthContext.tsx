import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../lib/types";

interface AuthContextType {
  currentUser: User | null;
  updateUser: (data: User | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const defaultAuthContext: AuthContextType = {
  currentUser: null,
  updateUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

// USER CHANGING & LOCALSTORAGE UPDATING
  const updateUser = (data: User | null) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
