import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";

const Homepage = () => {
  console.log("Homepage rendered");
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
