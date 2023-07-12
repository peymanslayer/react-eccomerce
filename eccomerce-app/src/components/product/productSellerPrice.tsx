import { useLocation } from "react-router-dom";

function ProductSellerPrice() {
  const location = useLocation();
  const { product } = location.state;
  return (
    <div className="flex flex-col h-2/5 justify-start items-center ">
      <div className="w-full h-10 flex flex-row justify-end items-center p-2">
        <h1 className="font-bold text-xl">
          {product.price}
          <span className="text-sm">تومان</span>
        </h1>
      </div>
      <div className="w-full h-10 flex flex-row justify-end items-center text-sm p-2">
        بروزرسانی قیمت: 4 تیر 1402
      </div>
      <div className="flex flex-row-reverse justify-center items-center w-full h-20">
        <button className="bg-red-700 border rounded-xl h-14 w-44 text-white">
          افزودن به سبد خرید
        </button>
        <button className="border rounded-xl flex flex-row justify-around items-center border-black h-14 w-20 bg-white ">
          <span className="text-5xl mb-2">-</span>
          <span className="text-2xl">1</span>
          <span className="text-3xl ">+</span>
        </button>
      </div>
    </div>
  );
}

export default ProductSellerPrice;
