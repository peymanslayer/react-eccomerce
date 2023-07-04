import RightTopHeader from "./rightTopHeader";
import MainTopHeader from "./mainTopHeader";
import React from "react";
import LeftTopHeader from "./leftTopHeader";
import RightBottomHeader from "./rightBottomHeader";
import LeftBottomHeader from './leftBottomHeader'

function Header(props:any) {
  return (
   <>
    <div className="flex flex-col justify-center w-full ">
      <div className="flex flex-row w-full justify-around items-center  ">        
        <RightTopHeader />
        <MainTopHeader />
        <LeftTopHeader />
      </div>
      <div className="flex flex-row justify-between bg-slate-100 h-11 w-full static ">
        <RightBottomHeader/>
        <LeftBottomHeader/>
      </div>
    </div>
    
   </>
  );
}

export default Header;
