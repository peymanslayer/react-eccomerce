import Category from "./category";
import HedphoneSlider from "./hedphoneSlider";
import MobileSlider from "./mobileSlider";
import Offer from "./offer";
import ScrollProducts from "./scrollProducts";
import TopSale from "./topSale";
import TopSaleOfDay from "./topSaleOfDay";
import TopSlider from "./topSlider";
import Layout from "../../layout/layout";

function Home() {
  return (
    <Layout>
      <TopSlider />
      <TopSale />
      <Category />
      <Offer />
      <MobileSlider />
      <HedphoneSlider />
      <ScrollProducts />
      <TopSaleOfDay />
    </Layout>
  );
}

export default Home;