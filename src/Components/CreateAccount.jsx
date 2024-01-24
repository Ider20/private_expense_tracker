import React from "react";
import Link from "next/link";

export const CreateAccount = () => {
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
        />
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Email"
        />
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Password"
        />
        <input
          className="border w-[390px] rounded-md p-1 bg-[#ebebeb]"
          placeholder="Re-password"
        />
        <Link href={"/loadpage"}>
          <button className="bg-orange-500 w-[390px] rounded-full p-1 mb-4 text-white">
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