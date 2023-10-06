import ProductMain from "./productMain";
import ProductNavbar from "./productNavbar";
import ProductServices from "./productServices";
import Layout from "../../layout/layout";
function Product(){
    return(
        <div className="w-full">
         <Layout>
            <ProductNavbar/>
            <ProductMain/>
            <ProductServices/>
         </Layout>
        </div>
    )
}

export default Product;