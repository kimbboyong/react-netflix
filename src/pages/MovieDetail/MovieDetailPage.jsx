import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";
import MovieCard from "../HomePage/components/MovieCard/MovieCard";

const Wrapper = styled.div``;
const Figure = styled.div``;
const Text = styled.div``;

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  const detailMovie =
    data && data.results.find((item) => parseInt(id) === item.id);
  console.log(detailMovie);
  return (
    <Wrapper>
      <Figure>
        <MovieCard movie={detailMovie} />
      </Figure>
      <Text></Text>
    </Wrapper>
  );
};

export default MovieDetailPage;
