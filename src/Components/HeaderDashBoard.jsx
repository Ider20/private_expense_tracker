import React, { useState } from "react";
import Link from "next/link";
import { MiniWindow } from "../Components/MiniWindow";
import { Records } from "../Components/Records";

export const HeaderDashBoard = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const handleOpen = () => {
    setOpenWindow(!openWindow);
  };

  const handleClose = (e) => {
    if (e.target.parentNode.classList.contains("bg-back-color")) {
      setOpenWindow(false);
    }
  };

  return (
    <>
      <div className="fixed z-10 w-full bg-white">
        <div className="w-[1200px] m-auto h-[72px] flex justify-between items-center">
          <div className="w-[250px] flex  gap-6 font-bold px-2 items-center">
            <Link href={"/dashboard"}>
              <div className="text-4xl">
                I<span className="text-orange-500">&</span>U
              </div>
            </Link>
            <Link href={"/dashboard"}>
              <div className="flex justify-center items-center w-[90px] font-normal ml-5 hover:scale-105 hover:font-semibold ease-in-out duration-75 cursor-pointer active:scale-95">
                Dashboard
              </div>
            </Link>
            <Link href={"/records"}>
              <div className="flex justify-center items-center w-[70px] font-normal hover:scale-105 hover:font-semibold ease-in-out duration-75 cursor-pointer active:scale-95">
                Records
              </div>
            </Link>
            <div></div>
          </div>
          <div className="flex gap-6">
            <button
              className="border h-8 px-4 rounded-full bg-cover text-white bg-orange-500 flex items-center gap-2 hover:shadow-lg hover:scale-[1.012] duration-200 active:scale-95"
              onClick={handleOpen}
            >
              <i className="fa-solid fa-plus"></i> Record
            </button>
            <img src="/avatar.png" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
      {openWindow && (
        <div
          className="fixed z-10 w-full h-full bg-back-color"
          onClick={handleClose}
        >
          <MiniWindow handleOpen={handleOpen} />
        </div>
      )}
    </>
  );
};

export default HeaderDashBoard;
