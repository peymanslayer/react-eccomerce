import {BsDashCircleDotted} from "react-icons/bs"

function ProductSellerHealth(){
    return(
      <>
        <div className="flex flex-row justify-around w-3/4 h-16 items-center mr-1">
            <BsDashCircleDotted size={30} />
            <p className="font-bold text-sm">تضمین اصالت و سلامت</p>
        </div>
        <hr className="w-72 h-1 bg-slate-300" />
      </>
    )
}

export default ProductSellerHealth;