import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/router";
import { LoadPage } from "../Components/LoadPage";

export const CreateAccount = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");

  const [showPassword, setShowPassword] = useState("password");
  const [showRePassword, setShowRePassword] = useState("password");
  const [visibleEyePassword, setVisibleEyePassword] = useState(true);
  const [visibleEyeRePassword, setVisibleEyeRePassword] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
    setVisibleEyePassword(!visibleEyePassword);
  };
  const handleShowRePassword = () => {
    if (showRePassword === "password") {
      setShowRePassword("text");
    } else {
      setShowRePassword("password");
    }
    setVisibleEyeRePassword(!visibleEyeRePassword);
  };

  const router = useRouter(); // Routing =============================

  const inputUserName = (e) => {
    // console.log(e.target.value, "User Name");
    setUserName(e.target.value);
  };
  const inputUserEmail = (e) => {
    // console.log(e.target.value, "User Email");
    setUserEmail(e.target.value);
  };
  const inputUserPassword = (e) => {
    // console.log(e.target.value, "User Password");
    setUserPassword(e.target.value);
  };
  const inputRePassword = (e) => {
    // console.log(e.target.value, "Re Password");
    setUserRePassword(e.target.value);
  };

  const handleSignUp = async () => {
    setLoading(true);

    const userData = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    try {
      if (userRePassword !== userPassword) {
        return alert("Re-Password does not match with Password");
      } else {
        if (userEmail && userName && userPassword) {
          const response = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
          console.log(response, "response");
          if (response.ok) {
            alert("Succesfully Signed up");
            return router.push("/steps");
          }
          // const jsonTest = await response.json();
          // console.log(jsonTest, "jsonTest");

          if (response.ok === false) {
            alert("User already exist");
            return router.push("/");
          }
        } else {
          return alert("Missing field(s)!");
        }
        // console.log(response, "response");
      }
    } catch (error) {
      alert("Error to submit:" + error.message);
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
            <div className="text-4xl font-semibold">
              I<span className="text-orange-500">&</span>U
            </div>
            <div className="flex flex-col items-center mb-4">
              <p className="text-2xl font-semibold">
                Create I<span className="text-orange-500">&</span>U account
              </p>
              <p className="text-base font-normal">
                Sign up below to create your Wallet account
              </p>
            </div>

            <input
              className="border w-[390px] h-12 rounded-lg px-4 p-1 bg-[#ebebeb] hover:shadow-lg ease-in-out duration-200"
              placeholder="Name"
              onChange={inputUserName}
            />
            <input
              className="border w-[390px] h-12 rounded-lg px-4 p-1 bg-[#ebebeb] hover:shadow-lg ease-in-out duration-200"
              placeholder="Email"
              onChange={inputUserEmail}
            />
            <div className="flex gap-2 ml-[26px]">
              <input
                className="border w-[390px] h-12 rounded-lg px-4 p-1 bg-[#ebebeb] hover:shadow-lg ease-in-out duration-200"
                placeholder="Password"
                type={showPassword}
                onChange={inputUserPassword}
              />
              {/* <input type="checkbox" onClick={handleShowPassword} /> */}

              <button onClick={handleShowPassword} className="text-orange-500 ">
                {visibleEyePassword ? (
                  <i class="fa-regular fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>

            <div className="flex gap-2 ml-[26px]">
              <input
                className="border w-[390px] h-12 rounded-lg px-4 p-1 bg-[#ebebeb] hover:shadow-lg ease-in-out duration-200"
                placeholder="Re-password"
                type={showRePassword}
                onChange={inputRePassword}
              />
              {/* <input type="checkbox" onClick={handleShowRePassword} /> */}
              <button
                onClick={handleShowRePassword}
                className="text-orange-500"
              >
                {visibleEyeRePassword ? (
                  <i class="fa-regular fa-eye"></i>
                ) : (
                  <i class="fa-solid fa-eye"></i>
                )}
              </button>
            </div>
            <button
              className="bg-orange-500 w-[390px] h-12 rounded-full p-1 mb-4 text-white hover:shadow-lg ease-in-out duration-200"
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <div className="flex flex-row gap-2">
              <div className="text-base">Already have account?</div>
              <Link href={"/"}>
                <span className="text-base text-[#0166FF]">Log in</span>
              </Link>
            </div>
          </div>
          <div className="w-2/4 bg-orange-500 h-screen"></div>
        </div>
      )}
    </div>
  );
};
export default CreateAccount;
