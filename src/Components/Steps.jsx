import React from "react";
import { Currency } from "./Icons/Currency";
import { useState } from "react";

export const Steps = () => {
  const [steps, setSteps] = useState(1);

  return (
    <div className="w-full flex flex-col items-center pt-10">
      <div className="flex justify-center mb-12">I&U</div>
      <div className="flex gap-x-24 justify-center text-sm mb-[141px]">
        <div className="flex flex-col items-center">
          <div
            className={`bg-[#0166FF] w-5 text-white flex justify-center rounded-full`}
          >
            1
          </div>
          <div>Currency</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div
            className={`bg-[#E5E7EB] w-5 text-white flex justify-center rounded-full`}
          >
            2
          </div>
          <div>Balance</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div
            className={`bg-[#E5E7EB] w-5 text-white flex justify-center rounded-full`}
          >
            3
          </div>
          <div>Finish</div>
        </div>
      </div>
      <div className="w-10 bg-[#0166FF] m-auto flex justify-center items-center rounded-full h-10 mb-6">
        <Currency />
      </div>
      <div className="mb-6">Select base currency</div>
      <select name="" id="" className="border rounded-md p-2 w-[340px] mb-2">
        <option>MNT-Mongolian Tugrik</option>
      </select>
      <div className="w-[340px] mb-[32px]">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one{" "}
      </div>
      <button className="w-[340px] bg-[#0166FF] text-white p-1 rounded-full">
        Confirm
      </button>
    </div>
  );
};
export default Steps;
