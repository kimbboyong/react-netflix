import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonMovies = () => {
  return (
    <Skeleton
      sx={{
        bgcolor: "#595959",
        marginBottom: "15px",
      }}
      variant="rounded"
      width={200}
      height={40}
    />
  );
};

export default SkeletonMovies;
