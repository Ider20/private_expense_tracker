import React from "react";
import { Currency } from "./Icons/Currency";
import { Coin } from "./Icons/Coin";
import { Correct } from "./Icons/Correct";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Steps = () => {
  const [steps, setSteps] = useState(1);
  const [bgColor, setBgColor] = useState("[#E5E7EB]");
  const [textColor, setTextColor] = useState("gray-500");

  const handleConfirm = () => {
    if (steps >= 3) {
      return;
    } else {
      setBgColor("orange-500");
      setTextColor("white");
      setSteps(steps + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-10">
      <div className="flex justify-center mb-12 text-4xl font-bold">
        I<span className="text-orange-500">&</span>U
      </div>
      <div className="flex justify-center text-sm ">
        <div className="flex flex-col items-center gap-2">
          <div
            className={`bg-orange-500 w-5 text-white flex justify-center rounded-full`}
          >
            1
          </div>
        </div>
        <div
          className={`w-[90px] h-[5px] border-${
            steps >= 2 ? bgColor : "gray-200"
          } bg-${steps >= 2 ? bgColor : "gray-200"} mt-2`}
        ></div>
        {/* <div className="text-gray-500 text-4xl self-start">_______</div> */}
        <div className="flex flex-col items-center gap-2">
          <div
            className={`bg-${steps >= 2 ? bgColor : "gray-200"} w-5 text-${
              steps >= 2 ? textColor : "gray-500"
            } flex justify-center rounded-full`}
          >
            2
          </div>
        </div>
        <div
          className={`w-[90px] h-[5px] border-${
            steps === 3 ? bgColor : "gray-200"
          } bg-${steps === 3 ? bgColor : "gray-200"} mt-2`}
        ></div>
        <div className="flex flex-col items-center gap-2">
          <div
            className={`bg-${steps === 3 ? bgColor : "gray-200"} w-5 text-${
              steps === 3 ? textColor : "gray-500"
            } flex justify-center rounded-full`}
          >
            3
          </div>
        </div>
      </div>
      <div className="mb-[141px] flex gap-16 mt-2 text-sm text-gray-500">
        <div>Currency</div>
        <div>Balance</div>
        <div>Finish</div>
      </div>
      {/* Step One ====================================================*/}
      {steps === 1 && (
        <div className="w-[350px] m-auto flex flex-col items-center">
          <div className="w-10 bg-orange-500 m-auto flex justify-center items-center rounded-full h-10 mb-6">
            <Currency />
          </div>
          <div className="mb-6">Select base currency</div>
          <select
            name=""
            id=""
            className="border rounded-lg p-2 w-[340px] mb-2 cursor-pointer"
          >
            <option>MNT-Mongolian Tugrik</option>
          </select>
          <div className="w-[340px] mb-[32px]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </div>
          <button
            className="w-[340px] bg-orange-500 text-white p-1 rounded-full"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      )}
      {/* Step Two ====================================================*/}
      {steps === 2 && (
        <div className="w-[350px] m-auto flex flex-col items-center">
          <div className="w-10 bg-orange-500 m-auto flex justify-center items-center rounded-full h-10 mb-6">
            <Coin />
          </div>
          <div className="mb-6">Set up your cash Balance</div>
          <input
            className="border w-[350px] px-4 p-2 rounded-lg"
            placeholder="Email"
          />
          <div className="w-[340px] mb-[32px]">
            How much cash do you have in your wallet?
          </div>
          <button
            className="w-[340px] bg-orange-500 text-white p-1 rounded-full"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      )}
      {/* Step Three ====================================================*/}
      {steps === 3 && (
        <div className="flex flex-col items-center">
          <div className="w-10 bg-orange-500 m-auto flex justify-center items-center rounded-full h-10 mb-6">
            <Correct />
          </div>
          <div className="mb-6">Good Job!</div>
          <div className="w-[340px] mb-[32px] text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
          <Link href={"./"}>
            <button className="w-[340px] bg-orange-500 text-white p-1 rounded-full">
              Go to back Login page
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Steps;
