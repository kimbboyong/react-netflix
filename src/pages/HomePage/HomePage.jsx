import React from "react";
import SkeletonMain from "../../components/Skeleton/SkeletonMain";
import Banner from "./components/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <SkeletonMain />
    </>
  );
};

export default HomePage;
