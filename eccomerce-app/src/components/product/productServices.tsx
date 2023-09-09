import { AiTwotoneCustomerService } from "react-icons/ai";
import {GiFireplace} from "react-icons/gi";
import {SiAdguard} from "react-icons/si";

function ProductServices() {
  return (
    <div className="w-full h-32 flex flex-row justify-around items-center">
      <div className="flex flex-col justify-center items-center">
        <AiTwotoneCustomerService size={50} />
        <p>پشتیبانی 24 ساعته</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <GiFireplace size={50}/>
        <p>پرداخت در محل </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <SiAdguard size={50}/>
        <p>7 روز ضمانت کالا</p>
      </div>
    </div>
  );
}

export default ProductServices;
