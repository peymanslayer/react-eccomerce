import ProductSellerHealth from "./productSellerHealth";
import ProductSellerPrice from "./productSellerPrice";
import ProductSellerWarranty from "./productSellerWarranty";
import ShopOfProductSeller from "./shopOfProductSeller";

function ProductSeller(){
    return(
        <div className="w-72 h-96 border rounded bg-slate-100 flex flex-col justify-start items-around">
            <ShopOfProductSeller/>
            <ProductSellerWarranty/>
            <ProductSellerHealth/>
            <ProductSellerPrice/>
        </div>
    )
}

export default ProductSeller;