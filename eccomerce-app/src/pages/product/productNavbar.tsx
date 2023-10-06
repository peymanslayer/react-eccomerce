import {useLocation} from 'react-router-dom';

function ProductNavbar(){
    const location=useLocation()
    const {product}=location.state;
    
    return(
        <div className="w-36  flex flex-row justify-around items-center">
         <p className='text-slate-400 font-bold'>{product.category}</p>
         /
         <p className='font-bold'>{product.name}</p>
        </div>
    )
}

export default ProductNavbar;