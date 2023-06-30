import { IFindAllProduct } from "../../../types/findAllProduct";

function ScrollProductList(props:{data:IFindAllProduct,className:string}) {
  const {data,className}=props;
  return (
    <>
      <div className=" flex slider-item w-full slide flex-row h-full slider-item justify-around items-center  ">
        <img
          className="w-32 h-32"
          src={`http://localhost:4000/${data.image}`}
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <p className={`${className}`}>{data.description}</p>
          <h1 className={`${className}`}>{data.price}</h1>
        </div>
      </div>
    </>
  );
}

export default ScrollProductList;
