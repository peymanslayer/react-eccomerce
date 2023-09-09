import ProductMain from "./productMain";
import ProductNavbar from "./productNavbar";
import ProductServices from "./productServices";
function Product(){
    return(
        <div className="w-full">
            <ProductNavbar/>
            <ProductMain/>
            <ProductServices/>
        </div>
    )
}

export default Product;