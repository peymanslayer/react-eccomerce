import { RouterProvider,Route,Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Product from "../components/product";
function Public(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
        </Routes>
    )
}

export default Public;