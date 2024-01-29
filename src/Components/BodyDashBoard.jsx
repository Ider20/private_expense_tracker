import React from "react";
import { House } from "../Components/Icons/House";
import { WiFi } from "../Components/Icons/WiFi";

export const BodyDashBoard = () => {
  const records = [
    {
      icon: <House />,
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: -1000,
    },
    {
      icon: <House />,
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: -1000,
    },
  ];
  return (
    <div className="w-[1440px] m-auto flex flex-col items-center pt-20">
      {/* part 1 ==================================================================================================================== */}
      <div className=" flex gap-6 mt-[32px]">
        {/* card 1 ======== */}
        <div className="w-[385px] h-[220px] bg-orange-500 rounded-xl p-[36px] bg-card-noise bg-cover flex flex-col justify-between hover:scale-[1.03] duration-300">
          <div className="text-white text-2xl font-bold drop-shadow-sh-border">
            I<span className="text-orange-500 ">&</span>U
          </div>
          <div className="flex justify-between ">
            <div>
              <div className="text-gray-300">Cash</div>
              <div className="text-white">10,000,000</div>
            </div>
            <div>
              <WiFi />
            </div>
          </div>
        </div>
        {/* card 2 ======== */}
        <div className="w-[385px] h-[220px] bg-white rounded-xl hover:scale-[1.03] duration-300">
          <div className="flex px-9 py-4 items-center gap-2 text-base font-semibold">
            <i class="fa-regular fa-circle-dot text-orange-500"></i>
            Your Income
          </div>
          <hr />
          <div className="px-9 pb-9 pt-5 flex flex-col justify-between h-[170px]">
            <div>
              <div className="text-4xl font-semibold">1,200,000 ₮</div>
              <div className="text-[#64748B]">Your Income Amount</div>
            </div>
            <div className="flex gap-1 items-center">
              <i class="fa-solid fa-circle-up text-orange-500"></i>
              32% from last month
            </div>
          </div>
        </div>
        {/* card 3 ======== */}
        <div className="w-[385px] h-[220px] bg-white rounded-xl hover:scale-[1.03] duration-300">
          <div className="flex px-9 py-4 items-center gap-2 text-base font-semibold">
            <i class="fa-solid fa-circle-dot text-orange-500"></i>
            Total Expenses
          </div>
          <hr />
          <div className="px-9 pb-9 pt-5 flex flex-col justify-between h-[170px]">
            <div>
              <div className="text-4xl font-semibold">-1,200,000 ₮</div>
              <div className="text-[#64748B]">Your Income Amount</div>
            </div>
            <div className="flex gap-1 items-center">
              <i class="fa-solid fa-circle-down text-orange-500"></i>
              32% from last month
            </div>
          </div>
        </div>
      </div>
      {/* part 2 ==================================================================================================================== */}
      <div className="flex gap-6 mt-6">
        <div className="">
          <div className="w-[588px] h-[56px] bg-white rounded-t-xl px-6 py-4 font-semibold">
            Income - Expense
          </div>
          <hr />
          <div className="w-[588px] h-[226px] bg-white rounded-b-xl px-6 py-8">
            Graphics
          </div>
        </div>
        <div className="w-[588px] h-[56px]">
          <div className="flex justify-between bg-white rounded-t-xl px-6 py-4 font-semibold">
            Income - Expense
            <div className="font-light text-[#6B7280]">Jun 1 - Nov 30</div>
          </div>
          <hr />
          <div className="w-[588px] h-[226px] bg-white rounded-b-xl px-6 py-8">
            Graphics
          </div>
        </div>
      </div>
      {/* part 3 ==================================================================================================================== */}
      <div className="w-[1200px] h-full bg-white mt-6 rounded-xl mb-6">
        <div className=" h-[56px] flex items-center px-6 border-b font-semibold">
          Last Recods
        </div>
        {records.map((record, index) => (
          <div key={index} className="w-[1200px] px-6">
            <div className="flex justify-between border-b h-20 items-center">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  {record.icon}
                </div>
                <div>
                  <div>{record.title}</div>
                  <div className="text-xs text-[#6B7280]">{record.time}</div>
                </div>
              </div>
              <div className="text-[#84CC16]">{record.amount} ₮</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyDashBoard;
