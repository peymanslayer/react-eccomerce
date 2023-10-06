import { useGetTopSliderQuery } from "../../api/topSliderApi";
import { SampleNextArrow, SamplePrevArrow } from "../../components/customArrow";
import Slider from "react-slick";
import '../../styles/topSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IFindAllProduct } from "../../types/findAllProduct";
import SliderList from "../../components/ui/list/sliderList";
import { responsive } from "../../utils/sliderResponsive";
import {Link} from 'react-router-dom';

function TopSlider() {

  const { data, error, isLoading } = useGetTopSliderQuery("");
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide:true,
    responsive,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div
          className={`w-full flex flex-row-reverse justify-center items-center mt-4 overflow-hidden scroll-smooth bg-red-500 `}
        >
          <div className="parent-slider w-5/6">
            <Slider  className="soo" {...settings}>
              {data.map((x: IFindAllProduct) => {
                return (
                 <Link className="flex flex-row justify-center" to='product' state={{product:x}}> <SliderList  option={x}/> </Link>
                );
              })}
              <div className="w-56 h-64 rounded-md bg-white  mt-5 mr-2 ml-2 flex flex-col justify-center items-center ">
                <div className=" w-14 h-14 border border-orange-500 rounded-full mt-2 flex items-center">
                  <AiOutlineArrowLeft size={20} style={{ color: "orange" }} />
                </div>
                <p>پیشنهادات ما</p>
              </div>
            </Slider>
          </div>
          <div className="text-white w-3/6 text-2xl max-sm:mr-10 ">پیشنهادات ما </div>
        </div>
      ) : null}
    </>
  );
}

export default TopSlider;
