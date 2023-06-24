import React from "react";
import Layout from "../../layout/layout";
import TopSlider from "../../components/ui/slider/topSlider";
import TopSale from "../../components/topSale";
import Category from "../../components/category";
function Home() {
  return (
    <>
      <Layout>
        <TopSlider/>
        <TopSale/>
        <Category/>
      </Layout>
    </>
  );
}

export default Home;
