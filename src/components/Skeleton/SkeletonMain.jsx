import React from "react";
import SkeletonBanner from "./SkeletonBanner";
import SkeletonList from "./SkeletonList";

const SkeletonMain = () => {
  return (
    <>
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
    </>
  );
};

export default SkeletonMain;
