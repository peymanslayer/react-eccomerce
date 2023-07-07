import {useLocation} from "react-router-dom";

function ProductSummeryOfDetails(){
    const location=useLocation();
    const {product}=location.state
    return(
        <div className="flex flex-col justify-center items-center">
          <h1>{product.description}</h1>
        </div>
    )
}

export default ProductSummeryOfDetails;