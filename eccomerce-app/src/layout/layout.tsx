import Header from "./header/header"
function Layout(props:any){
  return(
   <>
   <Header/>
    <section>{props.children}</section>
   </>
  )
}

export default Layout