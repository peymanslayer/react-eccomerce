function ProductFeature(){
    return(
        <div className="flex flex-col h-52 justify-around items-start mt-10">
          <h1 className="text-lg font-bold">ویژگی محصول</h1>
          <div className="flex flex-row justify-start items-center">
            <p className="text-slate-600 text-sm">گارانتی:</p>
            <p className="text-slate-600 text-sm">8 ماه گارانتی</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <p className="text-slate-600 text-sm">جنس بدنه:</p>
            <p className="text-slate-600 text-sm">سرامیک</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <p className="text-slate-600 text-sm">وزن:</p>
            <p className="text-slate-600 text-sm">240g</p>
          </div>
        </div>
    )
}

export default ProductFeature;