import LeftBottomFooter from "./leftBottomFooter";
import TopLeftFooter from "./topLeftFooter";

function LeftFooter(){
    return(
        <div className="w-1/2 h-full flex flex-col justify-around items-center ">
            <TopLeftFooter/>
            <LeftBottomFooter/>
        </div>
    )
}

export default LeftFooter;