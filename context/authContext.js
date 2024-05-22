import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";

import * as SecureStorage from "expo-secure-store";

const TOKKEN_KEY = "authToken";

const API_URL = "https://frequent-garland-mbllm.koyeb.app/";

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStorage.getItemAsync(TOKKEN_KEY);
      if (token) {
        setAuthState({ token, authenticated: true });
    }
    setLoading(false);
    };

    loadToken();
  }, []);

  const register = async (username, password) => {
    try {
      return await axios.post(API_URL + "users/add", { username, password });
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (username, password) => {
    try {
      const result = await axios.post(API_URL + "auth/login", {
        username,
        password,
      });
      setAuthState({ token: result.data.access_token, authenticated: true });

      await SecureStorage.setItemAsync(TOKKEN_KEY, result.data.access_token);

      return result;
    } catch (e) {
      console.log("error", e.response.data.message);
      return { error: true, message: e.response.data.message };
    }
  };

  const logout = async () => {
    await SecureStorage.deleteItemAsync(TOKKEN_KEY);
    setAuthState({ token: null, authenticated: false });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
