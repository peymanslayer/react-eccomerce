import LeftFooter from "./leftFooter";
import RightFooter from "./rightFooter";

function Footer(){
    return(
        <div className="w-full h-96 bg-cyan-950 flex flex-row justify-start items-start">
            <RightFooter/>
            <LeftFooter/>
        </div>
    )
}

export default Footer;