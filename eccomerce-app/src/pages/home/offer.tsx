import AmazingOfferList from "./amazingOfferList";
import AmazingOffersSlider from "./amazingOffersSlider";
import OurOffer from "./ourOffer";

function Offer() {
  return (
    <div className="w-full flex flex-row justify-around border rounded  ">
      <OurOffer />
      <AmazingOffersSlider />
      <AmazingOfferList />
    </div>
  );
}

export default Offer;
