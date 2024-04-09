import React from "react";
import SkeletonList from "../../../../components/Skeleton/SkeletonList";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { useTopRatedMovies } from "../../../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMovies();
  if (isLoading) {
    return <SkeletonList />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <MovieSlider title={"TopRated Movies"} movies={data.results} />
    </div>
  );
};

export default TopRatedMovieSlide;
