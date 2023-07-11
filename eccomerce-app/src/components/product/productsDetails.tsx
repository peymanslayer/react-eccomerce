import IconsProductDetails from "./iconsProductDetails";
import ProductsDetailsImage from "./productDetailsImage";
import ProductSeller from "./productSeller";
import ProductSummeryOfDetails from "./productSummeryOfDetails";
function ProductsDetails() {
  return (
    <div className="h-full w-full flex flex-row justify-around items-start">
        <IconsProductDetails />
        <ProductsDetailsImage />
        <ProductSummeryOfDetails />
        <ProductSeller/>
    </div>
  );
}

export default ProductsDetails;
