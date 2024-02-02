import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();

  // Fetching user data ================================================================
  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/users?userId=${userId}`
      );
      const data = await response.json();
      console.log(data, "data");
      setUser(data);
      // console.log(userId, "userId");

      // console.log(data, "datad");
      // console.log(response, "response");
    } catch (error) {
      console.error(error);
    }
  };
  // Login scene =================================================================
  const login = async (email, password) => {
    const loginData = { email, password };

    const response = await fetch("http://localhost:8080", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      // Handle successful login
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);

      return router.push("/dashboard");
    } else {
      // Handle login failure
      const errorData = await response.json();
      alert(`Login failed: ${errorData.message}`);
      return router.push("/");
    }
  };

  const signup = () => {};

  // Recieving token and Decoding action ===============================================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const tokenDecoded = jwtDecode(token);

      if (tokenDecoded) {
        const userId = tokenDecoded.userId;
        fetchUserData(userId);
      } else {
        router.replace("/");
      }
    } else {
      router.replace("/");
    }
  }, [token]);

  return (
    <AuthenticationContext.Provider value={{ user, login }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
