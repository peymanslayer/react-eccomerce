import { BsSearch } from "react-icons/bs";
import "../../styles/mainTopHeader.css"
import React from "react";

function MainTopHeader() {
  return (
    <div className="w-6/12 flex flex-row items-center ">
      <div className="border-slate-200 w-3/4 h-11 max-sm:h-8 border-2 border-solid rounded flex flex-row items-center ">
        <input type="text" className="w-4/5 max-sm:h-7 " placeholder="جستجو" />
        <select className="w-1/5 h-11 p-2 max-sm:hidden ">
          <option value={"mobile"}>موبایل </option>
          <option value={"laptop"}>لب تاپ</option>
          <option value={"janebi"}> وسایل جانبی</option>
        </select>
      </div>
      <div className="parent border-2 w-11 m-1 max-sm:h-8 h-11 flex flex-row items-center justify-center rounded hover:bg-violet-600 outline-none">
        <BsSearch className="icon" size={20} style={{ color:'gray' }} />
      </div>
    </div>
  );
}

export default MainTopHeader;
