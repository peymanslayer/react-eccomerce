import ProductMain from "./productMain";
import ProductNavbar from "./productNavbar";
function Product(){
    return(
        <div className="w-full">
            <ProductNavbar/>
            <ProductMain/>
        </div>
    )
}

export default Product;