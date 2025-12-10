import React from "react";
import Hero from "./Hero";
import FeaturedCollections from "./FeaturedCollections";
import AssistanceSupport from "./AssistanceSupport";
import HappyCustomer from "./HappyCustomer";
import PopularCity from "./PopularCity";

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <PopularCity />
        <FeaturedCollections />
        <AssistanceSupport />
        <HappyCustomer />
      </div>
    </>
  );
};

export default HomePage;
