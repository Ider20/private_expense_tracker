import React from "react";
import { HeaderDashBoard } from "../Components/HeaderDashBoard";
import { BodyDashBoard } from "../Components/BodyDashBoard";
import { useState } from "react";

export const dashboard = () => {
  return (
    <div className="bg-gray-200 h-full">
      <HeaderDashBoard />
      <BodyDashBoard />
    </div>
  );
};

export default dashboard;
