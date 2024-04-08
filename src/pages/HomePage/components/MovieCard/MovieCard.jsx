import React from "react";
import { Card, Txt } from "./MovieCard.style";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt="card"
      />
      <Txt className="txt">Click</Txt>
    </Card>
  );
};

export default MovieCard;
