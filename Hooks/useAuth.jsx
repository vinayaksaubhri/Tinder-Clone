import { View, Text } from "react-native";
import { createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
