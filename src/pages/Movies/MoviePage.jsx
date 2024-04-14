import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieCard from "../HomePage/components/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

import "./Movies.css";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filteredAndSortedMovies, setFilteredAndSortedMovies] = useState([]);

  const keyword = query.get("q");
  const navigate = useNavigate();

  const { data: genreData } = useMovieGenreQuery();

  const { data, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handleMovieDetail = (movie) => {
    navigate(`/movies/${movie.id}`);
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    setQuery({ q: keyword, page: data.selected + 1 });
  };

  useEffect(() => {
    if (!data?.results) return;

    const showGenre = (genreIdList) => {
      if (!genreData) return [];
      return genreIdList
        .map((id) => {
          const genreObj = genreData.find((genre) => genre.id === id);
          return genreObj ? genreObj.name : null;
        })
        .filter((name) => name !== null);
    };

    const filterMoviesByGenre = (movies) => {
      return movies.filter((movie) => {
        const movieGenres = showGenre(movie.genre_ids);
        return selectedGenre ? movieGenres.includes(selectedGenre) : true;
      });
    };

    const sortMovies = (movies) => {
      let sortedMovies = [...movies];
      switch (sortOrder) {
        case "latest":
          sortedMovies.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
          break;
        case "oldest":
          sortedMovies.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
          break;
        case "popular":
          sortedMovies.sort((a, b) => b.popularity - a.popularity);
          break;
        default:
          break;
      }
      return sortedMovies;
    };

    const filteredMovies = filterMoviesByGenre(data.results);
    const sortedMovies = sortMovies(filteredMovies);
    setFilteredAndSortedMovies(sortedMovies);
  }, [data, selectedGenre, sortOrder, genreData]);

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12} className="mb-5">
          <Form.Select
            aria-label="Genre select"
            className="me-2 mb-2 custom-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">모든 장르</option>
            {genreData &&
              genreData.map((genre) => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
          </Form.Select>
          <Form.Select
            aria-label="Sort order"
            className="me-2 custom-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">정렬 방식</option>
            <option value="latest">최신순</option>
            <option value="oldest">오래된 순</option>
            <option value="popular">인기순</option>
          </Form.Select>
        </Col>
        <Col lg={8} xs={12}>
          <Row className="card-wrap">
            {filteredAndSortedMovies.map((movie, idx) => (
              <Col
                key={idx}
                lg={4}
                xs={12}
                onClick={() => handleMovieDetail(movie)}
                className="mb-3 cards"
              >
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          pageCount={data?.total_pages}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </Row>
    </Container>
  );
};

export default MoviePage;
