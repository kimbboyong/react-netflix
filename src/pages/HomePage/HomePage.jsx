import React from "react";
// import SkeletonMain from "../../components/Skeleton/SkeletonMain";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";

const HomePage = () => {
  return (
    <>
      <Banner />
      <PopularMovieSlide />
    </>
  );
};

export default HomePage;
