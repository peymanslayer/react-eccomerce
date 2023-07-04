import { MdOutlineAccountCircle } from "react-icons/md";
import {BsCartCheck} from "react-icons/bs";

function LeftTopHeader() {
  return (
    <div className="flex flex-row justify-center items-center" >
      <div className="flex flex-row justify-center items-center m-4  max-sm:w-fit ">
        <MdOutlineAccountCircle size={30}/>
        <p className="m-2 max-sm:hidden">حساب کاربری</p>
      </div>
      <div className="flex flex-row justify-center items-center max-sm:w-fit ">
        <BsCartCheck size={30}/>
        <p className="m-2 max-sm:hidden"> سبد خرید</p>
      </div>
    </div>
  );
}

export default LeftTopHeader;
