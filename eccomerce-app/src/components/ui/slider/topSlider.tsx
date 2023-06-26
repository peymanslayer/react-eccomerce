import { useGetTopSliderQuery } from "../../../api/topSliderApi";
import { SampleNextArrow, SamplePrevArrow } from "../../customArrow";
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
        <div className={`parent-slider flex flex-row justify-center items-center mt-4 overflow-hidden `}>
        <SliderMain data={data} option={settings} />
        </div>
      ) : null}
    </div>
  );
}

export default TopSlider;
