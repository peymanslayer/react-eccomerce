import Layout from "../layout/layout";
import TopSlider from "../components/home/topSlider";
import TopSale from "../components/home/topSale";
import Category from "../components/home/category";
import Offer from "../components/home/offer";
import MobileSlider from "../components/home/mobileSlider";
import ScrollProducts from "../components/home/scrollProducts";
import HedphoneSlider from "../components/home/hedphoneSlider";
import TopSaleOfDay from "../components/home/topSaleOfDay";
function Home() {
  return (
    <>
      <Layout>
        <TopSlider/>
        <TopSale/>
        <Category/>
        <Offer/>
        <MobileSlider/>
        <HedphoneSlider/>
        <ScrollProducts/>
        <TopSaleOfDay/>
      </Layout>
    </>
  );
}

export default Home;
