import {useLocation} from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import ProductColor from "./productColor";
function ProductSummeryOfDetails(){
    const location=useLocation();
    const {product}=location.state
    return(
        <div className="h-full flex flex-col justify-around items-start">
         <div className="flex h-32 flex-col justify-around items-start ">
          <h1 className="font-bold text-lg">{product.description}</h1>
          <small>{product.description}</small>
          <div className="flex flex-row justify-center items-center w-16 bg-gray-400 h-5 border rounded ">
            <AiFillStar size={20} color="white"/>
            <p className="text-white">5.00</p>
          </div>
          </div>
          <ProductColor/>
        </div>
    )
}

export default ProductSummeryOfDetails;