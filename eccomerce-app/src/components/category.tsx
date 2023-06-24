import { useEffect, useMemo, useState } from "react";
import { useGetTopSliderQuery } from "../api/topSliderApi";
import { IFindAllProduct } from "../types/findAllProduct";
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
          (itemsMap: any, item: any) =>
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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold">دسته بندی</h1>
      {error ? (
        <>error happend</>
      ) : isLoading ? (
        <>Is loading</>
      ) : data ? (
        <div className="flex flex-row justify-center items-center w-3/4 h-64">
          {getCategoryAndImageOfProductCategory().map((x: any) => {
            return (
              <div className="flex flex-row justify-center items-center w-1/3 shadow-md shadow-orange-400">
                <img
                  className="w-32 h-36"
                  src={`http://localhost:4000/${x.image}`}
                  alt=""
                />
                <p className="w-10 ">{x.category}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Category;
