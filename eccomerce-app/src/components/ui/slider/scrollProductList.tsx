import { IFindAllProduct } from "../../../types/findAllProduct";

function ScrollProductList(props:{data:IFindAllProduct,className:{parent:string,inner:string}}) {
  const {data,className}=props;
  return (
    <>
      <div className={`${className.parent} flex m-2 slider-item w-96 slide flex-row h-44 slider-item justify-around items-center`}>
        <img
          className="w-32 h-32 rounded-xl"
          src={`http://localhost:4000/${data.image}`}
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <p className={`${className.inner} w-32`}>{data.description}</p>
          <h1 className={`${className.inner}`}>{data.price}</h1>
        </div>
      </div>
    </>
  );
}

export default ScrollProductList;
