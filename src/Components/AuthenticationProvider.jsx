import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState("");

  // Recieving token and Decoding action ===============================================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const tokenDecoded = jwtDecode(token);
      if (tokenDecoded) {
        const userId = tokenDecoded.userId;
        console.log(userId, "userId");
        setUser(userId);
        fetchUserData(userId);
      } else {
        router.replace("/");
      }
    } else {
      router.replace("/");
    }
  }, []);

  // Fetching user data ================================================================
  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/users?userId=${userId}`
      );
      const data = await response.json();
      console.log(data, "datad");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthenticationContext.Provider value={user}>
      {children}
    </AuthenticationContext.Provider>
  );
};
