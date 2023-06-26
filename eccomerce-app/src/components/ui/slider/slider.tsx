import Slider from "react-slick";
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { IFindAllProduct } from "../../../types/findAllProduct";
import { SampleNextArrow,SamplePrevArrow } from "../../customArrow";
import { useGetTopSliderQuery } from "../../../api/topSliderApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/topSlider.css";
function SliderMain(){
    const { data, error, isLoading } = useGetTopSliderQuery("");
    const settings = {
      autoplay:true,
      arrows:true,
      dots: true,
      infinite: true,
      slidesToShow:5,
      slidesToScroll: 1,
      nextArrow:<SampleNextArrow/>,
      prevArrow:<SamplePrevArrow/>
    };
    return(
        <div className="parent-slider flex flex-row justify-center items-center mt-4 overflow-hidden ">
        <Slider  {...settings}>
          {data.map((x: IFindAllProduct) => {
            return (
             <div className="flex flex-col justify-between items-center w-64 h-64 bg-white mt-5 mr-1 rounded-md ">
               <img src={`http://localhost:4000/${x.image}`} alt="" />
               <p>{x.description}</p>
               <h3 className="text-orange-600">{x.price}</h3>
               <div className="flex flex-row justify-end w-64">
                <HiOutlineShoppingCart size={30} style={{color:'orange'}} className="m-2"/>
               </div>
             </div>
            );
          })}
        </Slider>
       </div>
    )
}
export default SliderMain;