import React from "react";
import { HeaderDashBoard } from "../Components/HeaderDashBoard";
import { ArrowDropDown } from "../Components/Icons/ArrowDropDown";
import { House } from "../Components/Icons/House";
import { Food } from "../Components/Icons/Food";
import { MiniWindow } from "../Components/MiniWindow";
import { useState } from "react";

export const Records = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const handleOpen = () => {
    setOpenWindow(!openWindow);
  };
  const handleClose = (e) => {
    if (e.target.parentNode.classList.contains("bg-back-color")) {
      handleOpen();
    }
  };
  const categories = [
    { caty: "Food & Drinks" },
    { caty: "hopping" },
    { caty: "Housing" },
    { caty: "Transportation" },
    { caty: "Vehicle" },
    { caty: "Life & Entertainment" },
    { caty: "Communication" },
    { caty: "Financial expenses" },
    { caty: "Investments" },
    { caty: "Income" },
    { caty: "Others" },
  ];
  const lend = [
    {
      icon: <House />,
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: -1000,
    },
  ];
  const food = [
    {
      icon: <Food />,
      title: "Food & Drinks",
      time: "14:00",
      amount: -1000,
    },
    {
      icon: <Food />,
      title: "Food & Drinks",
      time: "14:00",
      amount: -1000,
    },
    {
      icon: <Food />,
      title: "Food & Drinks",
      time: "14:00",
      amount: -1000,
    },
    {
      icon: <Food />,
      title: "Food & Drinks",
      time: "14:00",
      amount: -1000,
    },
    {
      icon: <Food />,
      title: "Food & Drinks",
      time: "14:00",
      amount: -1000,
    },
  ];

  return (
    <div>
      <HeaderDashBoard />
      {openWindow && (
        <div
          className={`fixed z-10 w-full h-full bg-back-color`}
          onClick={handleClose}
        >
          <MiniWindow handleOpen={handleOpen} />
        </div>
      )}
      <div className="w-[1200px] m-auto flex gap-6 pt-[112px] pb-8">
        {/* Left Side ======================================================================================== */}
        <div className="w-[282px] h-[1080px] bg-white rounded-lg py-6 px-4">
          <div className="flex flex-col gap-6 items-center mb-6">
            <div className="text-2xl font-semibold self-start">Records</div>
            <button
              className="w-[250px] h-8 bg-orange-500 rounded-full text-white hover:shadow-lg hover:scale-[1.012] ease-in-out duration-200 active:scale-95"
              onClick={handleOpen}
            >
              <i class="fa-solid fa-plus"></i> Add
            </button>
            <div>
              <input
                type="text"
                className="border border-gray-300 bg-gray-100 rounded-lg w-[240px] h-8 px-4 hover:shadow-lg ease-in-out duration-200"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="font-semibold mb-4">Types</div>
            <ul className="flex flex-col gap-2 ml-3">
              <li className="flex gap-1 hover:scale-[1.04] duration-100 cursor-pointer w-[90px]">
                <input type="radio" />
                All
              </li>
              <li className="flex gap-1 hover:scale-[1.04] duration-100 cursor-pointer w-[90px]">
                <input type="radio" />
                Income
              </li>
              <li className="flex gap-1 hover:scale-[1.04] duration-100 cursor-pointer w-[90px]">
                <input type="radio" />
                Expense
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="flex justify-between mb-4">
              <div className="font-semibold">Category</div>
              <div className="text-gray-300">Clear</div>
            </div>
            <ul className="flex flex-col gap-3 ml-3 mb-4">
              {categories.map((items, index) => (
                <li
                  key={index}
                  className="group flex justify-between items-center cursor-pointer hover:scale-[1.04] duration-100 hover:bg-orange-500 p-1 rounded-lg hover:text-white"
                >
                  <div className="flex gap-2 items-center pl-2 ">
                    <i class="fa-solid fa-eye text-gray-400 group-hover:text-white"></i>
                    {items.caty}
                  </div>
                  <ArrowDropDown />
                </li>
              ))}
            </ul>
            <button className="mt-2 ml-3 hover:scale-[1.04] duration-100">
              <i class="fa-solid fa-plus text-orange-500"></i> Add Category
            </button>
          </div>
          <div>
            <div className="font-semibold mb-4">Amount Range</div>
            <div className="flex gap-4">
              <input
                type="text"
                className="border w-[115px] h-12 rounded-lg bg-gray-100 border-gray-300 px-4 hover:shadow-lg ease-in-out duration-200"
                value={0}
              />
              <input
                type="text"
                className="border w-[115px] h-12 rounded-lg bg-gray-100 border-gray-300 px-4 hover:shadow-lg ease-in-out duration-200"
                value={1000}
              />
            </div>
          </div>
        </div>
        {/* Right Side ======================================================================================== */}
        <div className="w-[894px] h-[1080px] ">
          {/* Part 1 ===================== */}
          <div>
            <div className="flex justify-between py-3">
              <div className="flex items-center gap-4">
                <button className="w-8 h-8 bg-orange-500 rounded-lg hover:shadow-lg duration-200 active:scale-95">
                  <i class="fa-solid fa-chevron-left text-white"></i>
                </button>
                <p>Last 30 days</p>
                <button className="w-8 h-8 bg-orange-500 rounded-lg hover:shadow-lg duration-200 active:scale-95">
                  <i class="fa-solid fa-chevron-right text-white"></i>
                </button>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="p-4 rounded-lg border border-gray-300 hover:shadow-lg duration-200"
                >
                  <option value="">Newest first</option>
                  <option value="">Olderst first</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between bg-white px-6 py-3 rounded-lg border border-gray-300 hover:scale-[1.012] duration-200">
              <div className="flex">
                <input type="checkbox" className="w-6 h-6 rounded-md mr-6" />
                <p>Select all</p>
              </div>
              <div>- 35,500 ₮</div>
            </div>
          </div>
          {/* Part 2 Today ===================== */}
          <div>
            <div className="font-semibold mt-6 mb-4">Today</div>
            <div>
              {lend.map((item, index) => (
                <div className="group flex justify-between items-center bg-white px-6 py-3 rounded-lg border border-gray-300 mb-3 hover:scale-[1.012] duration-200 hover:bg-orange-500 ">
                  <div className="flex items-center gap-6">
                    <input type="checkbox" className="w-6 h-6" />
                    <div
                      key={index}
                      className="bg-orange-500 w-10 h-10 flex justify-center items-center rounded-full group-hover:bg-[#002366]"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="group-hover:text-white">{item.title}</div>
                      <div className="text-xs text-[#6B7280] group-hover:text-white">
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#23E01F] group-hover:text-white">
                    {item.amount} ₮
                  </div>
                </div>
              ))}
            </div>
            <div>
              {food.map((item, index) => (
                <div className="group flex justify-between items-center bg-white px-6 py-3 rounded-lg border border-gray-300 mb-3 hover:scale-[1.012] duration-200 hover:bg-orange-500">
                  <div className="flex items-center gap-6">
                    <input type="checkbox" className="w-6 h-6" />
                    <div
                      key={index}
                      className="bg-orange-500 w-10 h-10 flex justify-center items-center rounded-full group-hover:bg-[#002366]"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="group-hover:text-white">{item.title}</div>
                      <div className="text-xs text-[#6B7280] group-hover:text-white">
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#EAB308] group-hover:text-white">
                    {item.amount} ₮
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Part 3 Yesterday ===================== */}
            <div className="font-semibold mt-6 mb-4">Yesterday</div>
            <div>
              {food.map((item, index) => (
                <div className="group flex justify-between items-center bg-white px-6 py-3 rounded-lg border border-gray-300 mb-3 hover:scale-[1.012] duration-200 hover:bg-orange-500">
                  <div className="flex items-center gap-6">
                    <input type="checkbox" className="w-6 h-6" />
                    <div
                      key={index}
                      className="bg-orange-500 w-10 h-10 flex justify-center items-center rounded-full group-hover:bg-[#002366]"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="group-hover:text-white">{item.title}</div>
                      <div className="text-xs text-[#6B7280] group-hover:text-white">
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#EAB308] group-hover:text-white">
                    {item.amount} ₮
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
