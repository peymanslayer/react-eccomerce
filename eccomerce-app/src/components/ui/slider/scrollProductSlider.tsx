import { useGetFindProductApiQuery } from "../../../api/findProductApi";
import { IFindAllProduct } from "../../../types/findAllProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Mousewheel } from "swiper";
import '../../../styles/scrollProductSlider.css';
import "swiper/css";
import "swiper/css/pagination";
function ScrollProduct() {
  const { data, isLoading, error } = useGetFindProductApiQuery({
    category: "هندزفری",
  });

  return (
    <>
      {isLoading ? (
        <>kjhg</>
      ) : data ? (
        <div className=" scroll-product  w-5/12 flex flex-col justify-start items-start ">
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
                
                  <div
                    className=" flex slider-item w-full slide flex-row h-full slider-item justify-center items-center  "
                  >
                    <img
                      className="w-32 h-32"
                      src={`http://localhost:4000/${x.image}`}
                      alt=""
                    />
                    <div className="flex flex-col justify-center items-center">
                      <p>{x.description}</p>
                      <h1>{x.price}</h1>
                    </div>
                  </div>
                
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

export default ScrollProduct;
