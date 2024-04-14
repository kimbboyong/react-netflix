import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { usePopularMoviesQuery } from "../../hooks/usePopularMovies";
import MovieCard from "../HomePage/components/MovieCard/MovieCard";
import MovieModal from "../HomePage/components/MovieModal/MovieModal";
import MovieDetailReview from "./MovieDetailReview";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Movie = styled.div`
  margin-bottom: 30px;
`;
const Text = styled.div``;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Content = styled.div`
  font-size: 20px;
`;

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  const detailMovie =
    data && data.results.find((item) => parseInt(id) === item.id);

  return (
    <Wrapper>
      <Movie>
        <MovieCard movie={detailMovie} />
        <Title>{detailMovie && detailMovie.title}</Title>
        <Content>{detailMovie && detailMovie.overview}</Content>
      </Movie>
      <Text>
        <MovieDetailReview />
      </Text>
    </Wrapper>
  );
};

export default MovieDetailPage;
