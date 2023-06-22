import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUpSquare } from "react-icons/ai";
import { AiOutlineDownSquare } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import {BsFillChatRightTextFill} from "react-icons/bs"
import "../../styles/leftBottomHeader.css";

function RightBottomHeader() {
  // handle events
  function handleOnMouseEnterFirstDiv(upIconId:string,downIconId:string) {
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    const upIcon = document.getElementById(upIconId) as HTMLElement;
    const downIcon = document.getElementById(downIconId) as HTMLElement;
    upIcon.style.visibility = "hidden";
    downIcon.style.visibility = "visible";
  }

  function handleOnMouseOutFirstDiv(upIconId:string,downIconId:string) {
    const upIcon = document.getElementById(upIconId) as HTMLElement;
    const downIcon = document.getElementById(downIconId) as HTMLElement;
    upIcon.style.visibility = "visible";
    downIcon.style.visibility = "hidden";
  }

  function handleOnMouseOverFirstDiv(upIconId:string,downIconId:string) {
    const upIcon = document.getElementById(upIconId) as HTMLElement;
    const downIcon = document.getElementById(downIconId) as HTMLElement;
    upIcon.style.visibility = "hidden";
    downIcon.style.visibility = "visible";
  }

  return (
    <div className="flex flex-row items-center">
      <div
        className="flex flex-row justify-center h-11 w-1/2 items-center mr-2"
        id="parent"
        onMouseEnter={(e)=>handleOnMouseEnterFirstDiv('up-icon','show-icon')}
        onMouseOver={(e)=>handleOnMouseOverFirstDiv('up-icon','show-icon')}
        onMouseOut={(e)=>handleOnMouseOutFirstDiv('up-icon','show-icon')}
      >
        <AiOutlineHome size={20} />
        <p className="p-1 mb-1">صفحه اصلی</p>
        <AiOutlineUpSquare id="up-icon" size={20} />
        <AiOutlineDownSquare size={20} id="show-icon" />
      </div>
      <div
        className="flex flex-row justify-center h-11 w-3/4 items-center mr-2"
        id="parent"
        onMouseEnter={(e)=>handleOnMouseEnterFirstDiv('up-icon-2','show-icon-2')}
        onMouseOver={(e)=>handleOnMouseOverFirstDiv('up-icon-2','show-icon-2')}
        onMouseOut={(e)=>handleOnMouseOutFirstDiv('up-icon-2','show-icon-2')}
      >
        <CgMenuGridR size={20}/>
        <p className="p-1 mb-1"> دسته محصولات</p>
        <AiOutlineUpSquare id="up-icon-2" size={20} />
        <AiOutlineDownSquare size={20} id="show-icon-2" />
      </div>
      <div
        className="flex flex-row justify-center h-11 w-40 items-center mr-2" id="parent">
        <BsFillChatRightTextFill size={20}/>
        <p className="p-1 mb-1"> وبلاگ</p>
      </div>
    </div>
  );
}

export default RightBottomHeader;
