import React from "react";
import SkeletonBanner from "../../../../components/Skeleton/SkeletonBanner";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { MovieBanner, MovieText } from "./Banner.style";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <SkeletonBanner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <MovieBanner
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}` +
          ")",
      }}
    >
      <MovieText>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </MovieText>
    </MovieBanner>
  );
};

export default Banner;
