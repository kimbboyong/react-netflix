import React from "react";
import { useTopRatedMovies } from "../../../../hooks/useTopRatedMovies";
import SkeletonList from "../../../../components/Skeleton/SkeletonList";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
const UpCommingMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMovies();
  if (isLoading) {
    return <SkeletonList />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <MovieSlider title={"UpComming Movies"} movies={data.results} />
    </div>
  );
};

export default UpCommingMovieSlide;
