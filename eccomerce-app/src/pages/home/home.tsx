import React from "react";
import Layout from "../../layout/layout";
import TopSlider from "../../features/slider/components/topSlider";
import TopSale from "../../components/topSale";
function Home() {
  return (
    <>
      <Layout>
        <TopSlider/>
        <TopSale/>
      </Layout>
    </>
  );
}

export default Home;
