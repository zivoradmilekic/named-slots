import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

function useAuthToken(key: string) {
  const [token, setToken] = useState(localStorage.getItem(key));
  const [userData, setUserData] = useState<any>(null);

  const addToken = (token: string) => {
    localStorage.setItem(key, token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem(key);
    setToken(null);
  };

  useEffect(() => {
    setUserData(jwt.decode(token || ""));
  }, [token]);

  return {
    token,
    userData,
    addToken,
    removeToken
  };
}

export default useAuthToken;
