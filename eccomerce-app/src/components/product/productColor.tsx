function ProductColor() {
  return (
    <div className="flex h-32 flex-col justify-around items-start">
      <h1>انتخاب رنگ</h1>
      <div className="flex flex-row justify-start items-center">
        <div className="flex flex-row justify-center items-center w-24 h-10 border rounded bg-white border-2 border-slate-600 ml-2">
          استیل
          <div className="w-5 h-5 border rounded-full bg-slate-400 mr-2 "></div>
        </div>
        <div className="flex flex-row justify-center items-center w-24 h-10 border rounded bg-white border-2 border-slate-600">
          مشکی
          <div className="w-5 h-5 border rounded-full bg-slate-950 mr-2 "></div>
        </div>
      </div>
    </div>
  );
}

export default ProductColor;
