import React, { useState } from "react";
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
  const [genres, setGenres] = useState("");
  const keyword = query.get("q");

  const navigate = useNavigate();

  const { data, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const { data: genreData, isLoading } = useMovieGenreQuery();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" className="spinner" />;
  }
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList
      .map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj ? genreObj.name : null;
      })
      .filter((name) => name !== null);
  };

  const handleMovieDetail = (movie) => {
    console.log("aaa");
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <Form className="d-flex mb-5" onSubmit={onSubmit}>
            <Form.Control
              type="text"
              placeholder="장르를 입력해주세요."
              className="me-2 "
              aria-label="Search"
              variant="outline-light"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
            />
            <Button type="submit" variant="outline-danger">
              Search
            </Button>
          </Form>
        </Col>
        <Col lg={8} xs={12}>
          <Row className="card-wrap">
            {data?.results
              .filter((movie) => {
                const movieGenres = showGenre(movie.genre_ids);
                return genres ? movieGenres.includes(genres) : true;
              })
              .map((movie, idx) => (
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
