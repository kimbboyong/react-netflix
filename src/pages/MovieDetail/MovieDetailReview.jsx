import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useMovieReviewsQuery } from "../../hooks/useMovieReviews";

const Wrapper = styled.div``;
const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Items = styled.div`
  border: 1px solid #dc3545;
  border-radius: 10px;
  padding: 15px;
`;
const Title = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;
const Content = styled.div``;

const MovieDetailReview = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieReviewsQuery({
    id,
  });

  return (
    <Wrapper>
      <Reviews>
        {data &&
          data.results.map((item, idx) => (
            <Items key={idx}>
              <Title>{item.author}</Title>
              <Content>{item.content}</Content>
            </Items>
          ))}
      </Reviews>
    </Wrapper>
  );
};

export default MovieDetailReview;
