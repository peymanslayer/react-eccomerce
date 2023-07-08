import TopProductMain from "./topProductMain";
import ProductsDetails from "./productsDetails";
import "../../styles/productMain.css";
function ProductMain(){
    return(
        <div className="productMain h-full border rounded-xl ">
            <TopProductMain/>
            <ProductsDetails/>
        </div>
    )
}

export default ProductMain;