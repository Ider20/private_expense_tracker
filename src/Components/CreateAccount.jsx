import Link from "next/link";
import { useState } from "react";

export const CreateAccount = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");

  const inputUserName = (e) => {
    console.log(e.target.value, "User Name");
    setUserName(e.target.value);
  };
  const inputUserEmail = (e) => {
    console.log(e.target.value, "User Email");
    setUserEmail(e.target.value);
  };
  const inputUserPassword = (e) => {
    console.log(e.target.value, "User Password");
    setUserPassword(e.target.value);
  };
  const inputRePassword = (e) => {
    console.log(e.target.value, "Re Password");
    setUserRePassword(e.target.value);
  };
  const handleSignUp = async () => {
    const userData = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    try {
      const request = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (request.ok) {
        alert("Succesfully submit");
      }
    } catch (error) {
      alert("Error to submit");
    }
  };

  return (
    <div className="w-full m-auto flex">
      <div className="w-2/4 m-auto flex flex-col items-center gap-3">
        <div className="text-2xl font-semibold">I&U</div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-2xl font-semibold">Create I&U account</p>
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
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Password"
          onChange={inputUserPassword}
        />
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Re-password"
          onChange={inputRePassword}
        />
        <Link href={"/loadpage"}>
          <button
            className="bg-orange-500 w-[390px] rounded-full p-1 mb-4 text-white"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </Link>

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
  );
};
export default CreateAccount;
