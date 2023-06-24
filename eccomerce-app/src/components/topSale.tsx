import { AiOutlineFire } from "react-icons/ai";
import { useGetTopSliderQuery } from "../api/topSliderApi";
import { IFindAllProduct } from "../types/findAllProduct";

function TopSale() {
  const { data, error, isLoading } = useGetTopSliderQuery("");
  return (
    <div>
      {error ? (
        <>there was error</>
      ) : isLoading ? (
        <>is Loading</>
      ) : data ? (
        <div className="flex flex-col justify-around items-center w-full max-h-max mt-10 mr-10">
          <div className="flex flex-row justify-center">
            <h1 className="text-lg ml-2 font-bold">پر فروش ترین کالا ها</h1>
            <AiOutlineFire size={30} style={{ color: "green" }} />
          </div>
          <div className="flex flex-row justify-start flex-wrap w-full">
            {data.map((key:IFindAllProduct,x: number) => {
              return (
                <>
                  <div className="flex flex-col justify-center items-center w-80  mt-10 mr-2 ">
                    <div className="flex flex-row justify-start items-center w-80">
                      <img
                        className="w-28 h-28"
                        src={`http://localhost:4000/${key.image}`}
                        alt=""
                      />
                      <h1 className="font-bold text-lg text-teal-400">{x+1}</h1>
                      <p className="text-ellipsis w-28 text-center overflow-hidden text-stone-500">
                        {key.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
            <hr className="w-full bg-white mt-2 h-px" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TopSale;
