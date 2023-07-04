import { useGetAmazingOfferListQuery } from "../api/amazingOfferListApi";
import { IFindAllProduct } from "../types/findAllProduct";
import { isLoadingProcess } from "../utils/isLoading";
import { useEffect } from "react";

function AmazingOfferList() {
  const { data, error, isLoading } = useGetAmazingOfferListQuery("");

  let index = 0;
  // when slider changes exact item in list backgroung color and other css changes
  function categoryListHover() {
    const hover = document.getElementsByClassName("hoveron") as HTMLCollectionOf<HTMLElement>;
    const text = document.getElementsByClassName("text") as HTMLCollectionOf<HTMLElement>;
    setInterval(() => {
      if (index > 0) {
        categoryListHoverProsses(hover, text);
      } else {
        hover[index].style.backgroundColor = "#dc2626";
        text[index].style.color = "white";
        index++;
      }
    }, 2500);
  }

  function categoryListHoverProsses(hover:HTMLCollectionOf<HTMLElement>, text: HTMLCollectionOf<HTMLElement>) {
    if (index === Object.keys(data).length) {
      hover[index - 1].style.backgroundColor = "#dc2626";
      hover[index - 1].style.backgroundColor = "white";
      text[index - 1].style.color = "white";
      text[index - 1].style.color = "black";
      hover[0].style.backgroundColor = "#dc2626";
      text[0].style.color = "white";
      index = 1;
    } else {    
      hover[index].style.backgroundColor = "#dc2626";
      hover[index - 1].style.backgroundColor = "white";
      text[index].style.color = "white";
      text[index - 1].style.color = "black";
      index ++;
    }
  }

  useEffect(() => {
    isLoadingProcess(isLoading, categoryListHover);
  }, [isLoading, data]);

  return (
    <>
      {isLoading ? (
        <> is loading </>
      ) : data ? (
        <div className="w-96 h-fit border rounded-tl-lg mt-5 max-sm:hidden">
          {data.map((x: IFindAllProduct) => {
            return (
              <div className="w-full border h-8 hoveron">
                <p className="text-right mr-2 text text-center ">
                  {x.description}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default AmazingOfferList;
