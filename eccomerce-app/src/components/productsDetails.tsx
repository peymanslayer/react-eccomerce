import IconsProductDetails from "./iconsProductDetails";
import ProductsDetailsImage from "./productDetailsImage";
function ProductsDetails(){
    return(
        <div className="h-full w-full flex flex-row justify-around ">
            <IconsProductDetails/>
            <ProductsDetailsImage/>
        </div>
    )
}

export default ProductsDetails;