import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { LoadPage } from "../Components/LoadPage";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Statement ==========================================================================
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [showPassword, setShowPassword] = useState("password");
  const [visibleEyePassword, setVisibleEyePassword] = useState(true);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Taking and Handling values ===============================================================
  const handleEmail = (e) => {
    // console.log(e.target.value, "email");
    setInputEmail(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value, "Password");
    setInputPassword(e.target.value);
  };
  // Hide and Show password scene ==========================================
  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
    setVisibleEyePassword(!visibleEyePassword);
  };
  //Handling Login ==========================================================
  const handleLogin = async () => {
    setLoading(true);
    try {
      if (!inputEmail || !inputPassword) {
        alert("Please enter email or password.");
        return router.push("/");
      }
      const loginData = { email: inputEmail, password: inputPassword };
      const response = await fetch("http://localhost:8080", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      console.log(response);

      const data = await response.json();
      console.log(data.token, "data"); // Token from respond
      localStorage.setItem("token", data.token); // Local storage of Token

      // const decodedToken = jwtDecode(data.token);
      // console.log(decodedToken, "decodedToken");
      // localStorage.setItem("userId", decodedToken.userId); // Local storage of UserID

      if (response.ok) {
        // Handle successful login
        console.log("Successfully logged in");
        return router.push("/dashboard");
      } else {
        // Handle login failure
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
        return router.push("/");
      }
    } catch (error) {
      console.error("Problem during login:", error);
      alert("Problem to login. Please try again.");
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full m-auto flex">
      {loading ? (
        <LoadPage />
      ) : (
        <div className="w-full m-auto flex">
          <div className="w-2/4 m-auto flex flex-col items-center gap-3">
            <div className="text-4xl font-bold">
              I<span className="text-orange-500">&</span>U
            </div>
            <div className="flex flex-col items-center mb-4">
              <p className="text-2xl font-semibold">Welcome Back</p>
              <p className="text-base font-normal">
                Welcome back, Please enter your details
              </p>
            </div>

            <input
              className="border w-[390px] h-12 rounded-lg px-4 p-1 bg-[#ebebeb] hover:shadow-lg ease-in-out duration-200"
              placeholder="Email"
              type="email"
              onChange={handleEmail}
            />
            <div className="flex gap-2 ml-[26px]">
              <input
                className="border w-[390px] h-12 rounded-lg px-4 p-1 bg-[#ebebeb] hover:shadow-lg ease-in-out duration-200"
                placeholder="Password"
                type={showPassword}
                onChange={handlePassword}
              />
              <button onClick={handleShowPassword} className="text-orange-500">
                {visibleEyePassword ? (
                  <i class="fa-regular fa-eye hover:scale-110 duration-150"></i>
                ) : (
                  <i className="fa-solid fa-eye hover:scale-110 duration-150"></i>
                )}
              </button>
            </div>
            <button
              className="bg-orange-500 w-[390px] h-12 rounded-full p-1 mb-4 text-white hover:shadow-lg ease-in-out duration-200 active:scale-95"
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
      )}
    </div>
  );
}
