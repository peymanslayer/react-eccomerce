import { AiOutlineShoppingCart } from "react-icons/ai";

function ShopOfProductSeller(){
    return(
        <div className="flex flex-col items-around justify-around h-24 w-72">
                <div className="flex flex-row w-2/3 h-10 justify-around items-start pt-5 pr-5">
                  <AiOutlineShoppingCart size={20}/>
                  <p className="text-sm">express shop</p>
                  <div className="w-12 h-5 border rounded-full border-slate-300 bg-slate-300 ">
                    <p className="text-xs text-green-600">منتخب</p>
                  </div>
                </div>
                <div className="flex flex-row w-full h-10 justify-center items-center text-slate-500 mr-6">
                   <p className="text-sm font-thin">رضایت خریداران</p> 
                   <div className="w-3 h-4 border-l border-black "></div>
                   <p className="text-sm font-thin mr-2">عملکرد <span className="text-green-600 font-bold">عالی</span> </p> 
                </div>
                <hr className="w-72 h-1 bg-slate-300" />   
            </div>
    )
}

export default ShopOfProductSeller;