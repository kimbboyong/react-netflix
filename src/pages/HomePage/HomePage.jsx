import React from "react";
import SkeletonBanner from "../../components/Skeleton/SkeletonBanner";
import SkeletonList from "../../components/Skeleton/SkeletonList";

const HomePage = () => {
  return (
    <>
      <SkeletonBanner />
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
    </>
  );
};

export default HomePage;
