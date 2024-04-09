import { styled } from "styled-components";

import SkeletonList from "../../../../components/Skeleton/SkeletonList";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import TopRatedMovieSlide from "./TopRatedMovieSlide";
import UpCommingMovieSlide from "./UpCommingMovieSlide";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  .card-list {
    height: 500px;
  }
`;

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <SkeletonList />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Wrapper>
      <MovieSlider title={"Popular Movies"} movies={data?.results} />
      <TopRatedMovieSlide />
      <UpCommingMovieSlide />
    </Wrapper>
  );
};

export default PopularMovieSlide;
