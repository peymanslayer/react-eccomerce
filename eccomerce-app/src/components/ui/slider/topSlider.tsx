import { useGetTopSliderQuery } from "../../../api/topSliderApi";
import Slider from "react-slick";
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { SampleNextArrow, SamplePrevArrow } from "../../customArrow";
import { IFindAllProduct } from "../../../types/findAllProduct";
import SliderMain from "./slider";


function TopSlider() {
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
  
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <SliderMain/>
      ) : null}
    </div>
  );
}

export default TopSlider;
