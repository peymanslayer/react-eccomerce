import ScrollProductMainSlider from "./ui/slider/scrollProductMainSlider";
import ScrollProductRightSlider from "./ui/slider/scrollProductRightSlider";
function ScrollProducts(){
    return(
        <div className="w-full flex flex-row justify-around items-center mt-10 max-sm:flex max-sm:flex-col max-sm:w-full">
          <ScrollProductRightSlider/>
          <ScrollProductMainSlider/>
        </div>
    )
}

export default ScrollProducts;