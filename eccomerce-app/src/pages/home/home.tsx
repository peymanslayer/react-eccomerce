import React from "react";
import Layout from "../../layout/layout";
import TopSlider from "../../components/ui/slider/topSlider";
import TopSale from "../../components/topSale";
import Category from "../../components/category";
import Offer from "../../components/offer";
function Home() {
  return (
    <>
      <Layout>
        <TopSlider/>
        <TopSale/>
        <Category/>
        <Offer/>
      </Layout>
    </>
  );
}

export default Home;
