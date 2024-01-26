import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleEmail = (e) => {
    // console.log(e.target.value, "email");
    setInputEmail(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value, "Password");
    setInputPassword(e.target.value);
  };

  const handleLogin = async () => {
    const loginData = { email: inputEmail, password: inputPassword };

    const response = await fetch("http://localhost:8080", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
  };

  return (
    <div className="w-full m-auto flex">
      <div className="w-2/4 m-auto flex flex-col items-center gap-3">
        <div className="text-2xl font-bold">
          I<span className="text-orange-500">&</span>U
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-2xl font-semibold">Welcome Back</p>
          <p className="text-base font-normal">
            Welcome back, Please enter your details
          </p>
        </div>

        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Email"
          onChange={handleEmail}
        />
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Password"
          onChange={handlePassword}
        />

        <button
          className="bg-orange-500 w-[390px] rounded-full p-1 mb-4 text-white"
          onClick={handleLogin}
        >
          Log In
        </button>

        <div className="flex flex-row gap-2">
          <div className="">Don't have account?</div>
          <Link href={"/signup"}>
            <span className="text-base text-[#0166FF]">Sign up</span>
          </Link>
        </div>
      </div>
      <div className="w-2/4 bg-orange-500 h-screen"></div>
    </div>
  );
}
