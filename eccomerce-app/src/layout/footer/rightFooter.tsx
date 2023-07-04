import BottomRightFooter from "./bottomRightFooter"
import TopRightFooter from "./topRightFooter"

function RightFooter(){
    return(
        <div className="w-1/2 h-full flex flex-col justify-around items-center">
            <TopRightFooter/>
            <BottomRightFooter/>
        </div>
    )
}

export default RightFooter