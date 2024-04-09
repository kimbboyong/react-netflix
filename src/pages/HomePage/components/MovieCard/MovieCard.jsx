import React from "react";
import { Card, Txt } from "./MovieCard.style";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
        alt="card"
      />

      <Txt className="txt">Click!!</Txt>
    </Card>
  );
};

export default MovieCard;
