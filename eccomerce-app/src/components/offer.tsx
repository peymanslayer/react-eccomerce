import AmazingOfferList from "./amazingOfferList";
import AmazingOffersSlider from "./ui/slider/amazingOffersSlider";
import OurOffer from "./ourOffer";

function Offer(){
    return(
        <div className="w-full flex flex-row justify-around">
     <OurOffer/>
     <AmazingOffersSlider/>
     <AmazingOfferList/>
        </div>
    )
}

export default Offer;