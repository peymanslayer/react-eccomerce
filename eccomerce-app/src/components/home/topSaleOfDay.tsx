import {  useGetAmazingOfferListQuery } from '../../api/amazingOfferListApi';
import '../../styles/topSaleOfDay.css'
import { IFindAllProduct } from "../../types/findAllProduct";
import ScrollProductList from "../ui/list/scrollProductList";
function TopSaleOfDay(){
    const {data,isLoading,error}=useGetAmazingOfferListQuery('')
    return(
        <div className="w-full top-sale-day flex flex-row justify-center ">
            {isLoading?(
                <>is loading</>
            ):data?(
                <div className="bg-cyan-950 w-5/6 h-5/6 m-10 rounded-xl flex flex-row justify-around items-start flex-wrap max-sm:w-full ">
                    {data.map((x:IFindAllProduct)=>{
                       return <ScrollProductList data={x} className={{inner:'text-white',parent:'border border-2 rounded-xl border-amber-600'}} />
                    })}
                </div>
            ):null}
        </div>
    )
}

export default TopSaleOfDay;