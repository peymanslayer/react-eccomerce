import { useEffect, useMemo, useState } from "react";
import { useGetTopSliderQuery } from "../api/topSliderApi";
import { IFindAllProduct } from "../types/findAllProduct";
import "../styles/category.css";
function Category() {
  const { data, error, isLoading } = useGetTopSliderQuery("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getCategoryAndImageOfProductCategory() {
    if (isLoading) {
      console.log("oo");
      return [""];
    }
    const uniqItems = [
      ...data
        .reduce(
          (itemsMap:any, item: IFindAllProduct)=>      
            itemsMap.has(item.category)              
              ? itemsMap
              : itemsMap.set(item.category, item),
          new Map()
          )
        .values(),
    ];
    return uniqItems;
  }

  useEffect(() => {
    getCategoryAndImageOfProductCategory();
  }, [isLoading]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-lg font-bold">دسته بندی</h1>
      {error ? (
        <>error happend</>
      ) : isLoading ? (
        <>Is loading</>
      ) : data ? (
        <div className="flex flex-row justify-around items-center w-full h-64">
          {getCategoryAndImageOfProductCategory().map((x: any) => {
            return (
              <div className="flex flex-row justify-start items-center w-64 h-32  border-2 rounded-md category max-sm:w-32 h-32 max-sm:m-1">
                <img
                  className="w-20 h-20 m-2 max-sm:w-16 max-sm:h-16"
                  src={`http://localhost:4000/${x.image}`}
                  alt=""
                />
                <p className="w-10 max-sm:hidden">{x.category}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Category;
