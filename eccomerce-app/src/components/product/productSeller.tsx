import ShopOfProductSeller from "./shopOfProductSeller";

function ProductSeller(){
    return(
        <div className="w-72 h-96 border rounded bg-slate-100 flex flex-col justify-start items-around">
            <ShopOfProductSeller/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default ProductSeller;