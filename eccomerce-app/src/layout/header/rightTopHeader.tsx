import { BsShop } from "react-icons/bs";
import "../../styles/rightTopHeader.css";
import React from "react";


function RightTopHeader() {
  return (
  <div className="w-3/12 ">
    <div className="flex flex-row basis-1/4 items-center m-2.5 mb-4">
      <BsShop size={60} />
      <p className=" text-3xl m-2.5">exress Shop</p>
    </div>
  </div>
  );
}

export default RightTopHeader;
