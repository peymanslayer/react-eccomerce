import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from "react-icons/ai";
import {FaRegAddressCard} from "react-icons/fa";
function TopLeftFooter(){
    return(
        <div className="flex flex-col justify-around items-start h-48">
            <h1 className="text-white">راه های ارتباط با ما</h1>
            <div className="flex flex-col h-32 justify-around items-start">
                <div className="flex flex-row justify-center items-center">
                    <BiPhoneCall size={25} color='white'/>
                    <h1 className='text-white mr-2'>09304702517</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <AiOutlineMail size={25} color='white'/>
                    <h1 className='text-white mr-2'>Email</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <FaRegAddressCard size={25} color='white'/>
                    <h1 className='text-white mr-2'>اصفهان شاهین شهر</h1>
                </div>
            </div>
        </div>
    )
}

export default TopLeftFooter;