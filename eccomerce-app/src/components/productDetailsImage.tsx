import {useLocation} from 'react-router-dom';

function ProductsDetailsImage(){
    const location=useLocation();
    const {product}=location.state
    return(
        <div>
            <img src={`http://localhost:4000/${product.image}`} alt="" />
        </div>
    )
}

export default ProductsDetailsImage;