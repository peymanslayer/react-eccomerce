import Footer from "./footer/footer"
import Header from "./header/header"
function Layout(props:any){
  return(
   <>
   <Header/>
    <section>{props.children}</section>
   <Footer/>
   </>

  )
}

export default Layout