import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPupularMovies = () => {
  return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPupularMovies,
    select: (result) => result.data,
  });
};
