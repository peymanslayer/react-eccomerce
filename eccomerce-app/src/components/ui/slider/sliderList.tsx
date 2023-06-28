import { HiOutlineShoppingCart } from "react-icons/hi";
import { IFindAllProduct } from "../../../types/findAllProduct";

function SliderList(props:{option:IFindAllProduct}){
    
         return(
          <div className="flex flex-col justify-around items-center w-56 h-64 bg-white mt-5 mr-1 ml-2 rounded-md ">
                    <img src={`http://localhost:4000/${props.option.image}`} alt="" />
                    <p>{props.option.description}</p>
                    <h3 className="font-bold">{props.option.price}</h3>
                    <div className="flex flex-row justify-end w-32 ">
                      <HiOutlineShoppingCart
                        size={30}
                        style={{
                          color: "white",
                          backgroundColor: "orange",
                          width: "25px",
                        }}
                        className=""
                      />
                    </div>
                  </div>
         )
 
}

export default SliderList;