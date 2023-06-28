
import { SampleNextArrow,SamplePrevArrow } from "../../customArrow";
import { useGetFindProductApiQuery } from "../../../api/findProductApi";
import { IFindAllProduct } from "../../../types/findAllProduct";
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    {isLoading?(
        <>ghjkl</>
    ):data?(
    <div className="overflow-hidden" >
      <h1 className="w-72 flex flex-row justify-center text-lg font-bold">موبایل</h1>
      <hr />
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
