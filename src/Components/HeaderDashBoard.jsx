import React from "react";

export const HeaderDashBoard = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[1200px] m-auto h-[72px] flex justify-between items-center">
        <div className="flex gap-6">
          <div>
            I<span className="text-orange-500">&</span>U
          </div>
          <div className="font-medium">Dashboard</div>
          <div>Records</div>
        </div>
        <div className="flex gap-6">
          <button className="border h-8 px-4 rounded-full border-orange-500 text-white bg-orange-500">
            + Record
          </button>
          <img src="/avatar.png" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashBoard;
