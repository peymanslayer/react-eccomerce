
import { SampleNextArrow,SamplePrevArrow } from "../../customArrow";
import { useGetFindProductApiQuery } from "../../../api/findProductApi";
import { IFindAllProduct } from "../../../types/findAllProduct";
import { responsive } from "../../../utils/sliderResponsive";
import SliderList from "./sliderList";
import Slider from "react-slick";

function MobileSlider() {
  const {data,isLoading,error}=useGetFindProductApiQuery({category:'mobile'})
  const settings = {
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    {isLoading?(
        <>ghjkl</>
    ):data?(
    <div className="overflow-hidden" >
      <div className="flex flex-col justify-center items-start w-72 mr-10 mt-5">
      <h1 className="w-24  text-lg font-bold">موبایل</h1>
      <hr className="w-24 bg-red-700 h-1 mt-1" />
      </div>
     <Slider {...settings}>
      {data.map((x:IFindAllProduct)=>{
        return <SliderList option={x}/>
      })}
      </Slider>
    </div>
    
  
    ):null}
   </>
  )
}



export default MobileSlider;
