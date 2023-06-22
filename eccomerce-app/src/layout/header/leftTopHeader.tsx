import { MdOutlineAccountCircle } from "react-icons/md";
import {BsCartCheck} from "react-icons/bs";

function LeftTopHeader() {
  return (
    <div className="flex flex-row justify-center items-center" >
      <div className="flex flex-row justify-center items-center m-4">
        <MdOutlineAccountCircle size={30}/>
        <p className="m-2">حساب کاربری</p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <BsCartCheck size={30}/>
        <p className="m-2"> سبد خرید</p>
      </div>
    </div>
  );
}

export default LeftTopHeader;
