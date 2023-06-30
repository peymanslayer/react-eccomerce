import Layout from "../../layout/layout";
import TopSlider from "../../components/ui/slider/topSlider";
import TopSale from "../../components/topSale";
import Category from "../../components/category";
import Offer from "../../components/offer";
import MobileSlider from "../../components/ui/slider/mobileSlider";
import ScrollProduct from "../../components/ui/slider/scrollProductSlider";
function Home() {
  return (
    <>
      <Layout>
        <TopSlider/>
        <TopSale/>
        <Category/>
        <Offer/>
        <MobileSlider/>
        <ScrollProduct/>
      </Layout>
    </>
  );
}

export default Home;
