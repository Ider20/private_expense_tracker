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

  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };
  const handleShowRePassword = () => {
    if (showRePassword === "password") {
      setShowRePassword("text");
    } else {
      setShowRePassword("password");
    }
  };

  const router = useRouter();

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
          if (response.ok) {
            alert("Succesfully submit");
            return router.push("/steps");
          }
          // const jsonTest = await response.json();
          // console.log(jsonTest, "jsonTest");

          if (!response.ok) {
            return alert("User already exist");
          }
        } else {
          return alert("Missing field!");
        }
        // console.log(response, "response");
      }
      // redirect
    } catch (error) {
      alert("Error to submit:" + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full m-auto flex">
      {loading ? (
        <LoadPage />
      ) : (
        <div className="w-full m-auto flex">
          <div className="w-2/4 m-auto flex flex-col items-center gap-3">
            <div className="text-2xl font-semibold">
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
              className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
              placeholder="Name"
              onChange={inputUserName}
            />
            <input
              className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
              placeholder="Email"
              onChange={inputUserEmail}
            />
            <div className="flex gap-2 ml-[21px]">
              <input
                className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
                placeholder="Password"
                type={showPassword}
                onChange={inputUserPassword}
              />
              <input type="checkbox" onClick={handleShowPassword} />
            </div>

            <div className="flex gap-2 ml-[21px]">
              <input
                className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
                placeholder="Re-password"
                type={showRePassword}
                onChange={inputRePassword}
              />
              <input type="checkbox" onClick={handleShowRePassword} />
            </div>

            <button
              className="bg-orange-500 w-[390px] rounded-full p-1 mb-4 text-white"
              onClick={handleSignUp}
            >
              Sign up
            </button>

            <div className="flex flex-row gap-2">
              <div className="text-base">Already have account?</div>
              <Link href={"/"}>
                {" "}
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
