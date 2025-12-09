import React from "react";
import Hero from "./Hero";
import FeaturedCollections from "./FeaturedCollections";
import AssistanceSupport from "./AssistanceSupport";
import HappyCustomer from "./HappyCustomer";

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <FeaturedCollections />
        <AssistanceSupport />
        <HappyCustomer />
      </div>
    </>
  );
};

export default HomePage;
