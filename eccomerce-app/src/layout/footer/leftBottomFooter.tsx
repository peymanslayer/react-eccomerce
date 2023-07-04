import {AiOutlineInstagram} from "react-icons/ai";
import {FaTelegram} from 'react-icons/fa';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineTwitter} from "react-icons/ai";
function LeftBottomFooter(){
    return(
        <div className="flex flex-row justify-around w-72 items-center">
            <AiOutlineInstagram size={30} color="white"/>
            <FaTelegram size={30} color="white"/>
            <AiOutlineWhatsApp size={30} color="white"/>
            <AiOutlineTwitter size={30} color="white"/>
        </div>
    )
}

export default LeftBottomFooter;