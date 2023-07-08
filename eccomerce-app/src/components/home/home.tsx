import Category from "./category";
import HedphoneSlider from "./hedphoneSlider";
import MobileSlider from "./mobileSlider";
import Offer from "./offer";
import ScrollProducts from "./scrollProducts";
import TopSale from "./topSale";
import TopSaleOfDay from "./topSaleOfDay";
import TopSlider from "./topSlider";

function Home() {
  return (
    <>
      <TopSlider />
      <TopSale />
      <Category />
      <Offer />
      <MobileSlider />
      <HedphoneSlider />
      <ScrollProducts />
      <TopSaleOfDay />
    </>
  );
}

export default Home;