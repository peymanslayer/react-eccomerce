import { useGetFindProductApiQuery } from "../../api/findProductApi";
import { IFindAllProduct } from "../../types/findAllProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel } from "swiper";
import '../../../styles/scrollProductSlider.css';
import "swiper/css";
import "swiper/css/pagination";
import ScrollProductList from "../ui/list/scrollProductList";
function ScrollProductRightSlider() {
  const { data, isLoading, error } = useGetFindProductApiQuery({
    category: "هندزفری",
  });

  return (
    <>
      {isLoading ? (
        <>kjhg</>
      ) : data ? (
        <div className=" scroll-product  w-4/12 flex flex-col justify-start items-start max-sm:w-4/5 ">
          <div className="h-14 mr-10 flex flex-row justify-center items-center">
            <hr className="bg-red-600 h-1 w-10 mt-2 ml-2" />
           <h1 className="text-lg font-bold">موبایل</h1>
          </div>
          <Swiper  id="sub" direction={"vertical"} loop={true} slidesPerView={2} slidesPerGroup={1}  mousewheel={{invert:true}} scrollbar={{ draggable: true }}  pagination={{
          clickable: true,
        }}
        modules={[Pagination,Mousewheel]}>
          <div className="h-full">
            {data.map((x: IFindAllProduct) => {
              return (
                <SwiperSlide>
                 <ScrollProductList data={x} className={{inner:"",parent:''}}/>
                </SwiperSlide>
              );
            })}
            </div>
          </Swiper>
        </div>
      ) : null}
    </>
  );
}

export default ScrollProductRightSlider;
