import React from "react";
import { House } from "../Components/Icons/House";

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
    <div className="w-[1440px] m-auto flex flex-col items-center">
      <div className=" flex gap-6 mt-[32px]">
        <div className="w-[385px] h-[220px] bg-white rounded-xl">asd</div>
        <div className="w-[385px] h-[220px] bg-white rounded-xl"></div>
        <div className="w-[385px] h-[220px] bg-white rounded-xl"></div>
      </div>
      <div className="flex gap-6 mt-6">
        <div className="">
          <div className="w-[588px] h-[56px] bg-white rounded-t-xl"></div>
          <div className="w-[588px] h-[226px] bg-white rounded-b-xl"></div>
        </div>

        <div className="">
          <div className="w-[588px] h-[56px] bg-white rounded-t-xl"></div>
          <div className="w-[588px] h-[226px] bg-white rounded-b-xl"></div>
        </div>
      </div>
      <div className="w-[1200px] h-full bg-white mt-6 rounded-xl mb-6">
        <div className=" h-[56px] flex items-center px-6 border-b">
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
                  <div>{record.time}</div>
                </div>
              </div>
              <div>{record.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyDashBoard;
