import { AiOutlineSafetyCertificate } from "react-icons/ai";

function ProductSellerWarranty() {
  return (
    <>
      <div className="w-3/4 h-16 flex flex-row justify-around items-center">
        <AiOutlineSafetyCertificate size={30} />
        <p className="font-bold text-sm">همراه با گارانتی اصل</p>
      </div>
      <hr className="w-72 h-1 bg-slate-300" />
    </>
  );
}

export default ProductSellerWarranty;
