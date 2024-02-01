import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }

    const token = localStorage.getItem("token");
    //decode here
    const payload = jwtDecode(token);
    console.log(payload.userId, "payload");
    setUser(payload.userId);
  }, []);

  const userData = async () => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  return (
    <AuthenticationContext.Provider value={user}>
      {children}
    </AuthenticationContext.Provider>
  );
};
