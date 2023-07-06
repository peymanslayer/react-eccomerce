import { RouterProvider,Route,Routes } from "react-router-dom";
import Home from "../pages/home";
import ProductPage from "../pages/product";
function Public(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<ProductPage/>}/>
        </Routes>
    )
}

export default Public;