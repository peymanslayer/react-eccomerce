import { BsShop } from "react-icons/bs";
import "../../styles/rightTopHeader.css";
import React from "react";


function RightTopHeader() {
  return (
  <div className="lg:w-3/12 sm:w-fit">
    <div className="lg:flex  lg:flex-row lg:basis-1/4 lg:items-center m-2.5 lg:mb-4 max-sm:w-full max-sm:flex max-sm:flex-row">
      <BsShop size={60} className="max-sm:hidden"  />
      <p className=" lg:text-3xl sm:text-xl m-2.5">exress Shop</p>
    </div>
  </div>
  );
}

export default RightTopHeader;
