import Slider from "react-slick";
import { useGetTopSliderQuery } from "../../../api/topSliderApi";
import { IFindAllProduct } from "../../../types/findAllProduct";

import "../../../styles/amazingOffersSlider.module.css";

function AmazingOffersSlider() {
  const { data, error, isLoading } = useGetTopSliderQuery("");

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 4500,
    dots: false,
  };
  return (
    <>
      {isLoading ? (
        <>ghjkl</>
      ) : data ? (
        <div className="flex flex-row justify-between items-start w-2/5 h-72 parent-slider2 mt-5">
          <div className="w-full">
            <Slider {...settings}>
              {data.map((x: IFindAllProduct) => {
                return (
                  <div className="flex flex-row justify-around items-around slide h-40">
                    <img
                      src={`http://localhost:4000/${x.image}`}
                      className="w-32 h-32 max-sm:w-24 max-sm:h-24"
                      alt=""
                    />
                    <div className="flex flex-col justify-start items-center h-72">
                      <h1 className="text-bold text-lg font-bold max-sm:text-sm max-sm:mr-2">{x.price}</h1>
                      <div className="flex flex-col justify-center items-center">
                        <p>{x.name}</p>
                        <p className="mb-4 text-slate-600 max-sm:hidden">{x.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="w-36 rounded-t-3xl h-10 bg-red-600 float-left ml-10 max-sm:w-20 h-7"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default AmazingOffersSlider;
