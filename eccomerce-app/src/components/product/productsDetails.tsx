import IconsProductDetails from "./iconsProductDetails";
import ProductsDetailsImage from "./productDetailsImage";
import ProductSummeryOfDetails from "./productSummeryOfDetails";
function ProductsDetails(){
    return(
        <div className="h-full w-full flex flex-row justify-around items-start">
            <IconsProductDetails/>
            <ProductsDetailsImage/>
            <ProductSummeryOfDetails/>
        </div>
    )
}

export default ProductsDetails;