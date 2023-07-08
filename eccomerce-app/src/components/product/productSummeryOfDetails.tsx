import {useLocation} from "react-router-dom";

function ProductSummeryOfDetails(){
    const location=useLocation();
    const {product}=location.state
    return(
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold text-lg">{product.description}</h1>
          <small>{product.description}</small>
        </div>
    )
}

export default ProductSummeryOfDetails;