export function isLoadingProcess(isLoading:boolean,func:Function):string{
  if(isLoading){
    return 'isloading'
  }else{

    func()
    return 'is'
  }
}