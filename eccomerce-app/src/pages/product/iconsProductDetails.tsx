import {AiOutlineLike} from 'react-icons/ai';
import {BsShare} from 'react-icons/bs';
import {MdCompareArrows} from 'react-icons/md'

function IconsProductDetails(){
    return(
        <div className=" h-52 flex flex-col justify-around items-start">
            <AiOutlineLike size={30}/>
            <BsShare size={30}/>
            <MdCompareArrows size={30}/>
        </div>
    )
}

export default IconsProductDetails;