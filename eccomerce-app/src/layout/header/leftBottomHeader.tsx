import { BsPhone } from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai"
function LeftBottomHeader() {
  return (
    <div className="flex flex-row items-center w-68 ml-4" >
      <div className="flex flex-row justify-center h-11 items-center mr-2">
        <BsPhone size={20}/>
        <p className="m-2">09304702517</p>
      </div>
      <div className="flex flex-row justify-center w-40 h-11 items-center mr-2">
        <AiOutlineMail size={20}/>
        <p className="m-2">ایمیل</p>
      </div>
    </div>
  );
}

export default LeftBottomHeader;
