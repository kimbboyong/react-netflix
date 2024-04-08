import React, { useState } from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieCard from "../MovieCard/MovieCard";
import { styled } from "styled-components";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../MovieCard/MovieCard.style.css";
import MovieModal from "../MovieModal/MovieModal";
import SkeletonList from "../../../../components/Skeleton/SkeletonList";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  .card-list {
    height: 500px;
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    position: relative;
    background: #000;
    z-index: 3;
    .txt {
      opacity: 1;
    }
    img {
      filter: brightness(0.5);
    }
  }
`;

const PopularMovieSlide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <SkeletonList />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleMovieClick = async (movie) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <Wrapper>
      <h3>popular movies</h3>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerGroup={2}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        breakpoints={{
          500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        navigation
      >
        {data.results.map((movie, idx) => (
          <CustomSwiperSlide
            onClick={() => {
              handleMovieClick(movie);
            }}
          >
            <MovieCard movie={movie} key={idx} />
          </CustomSwiperSlide>
        ))}
      </Swiper>

      {modalOpen && (
        <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
      )}
    </Wrapper>
  );
};

export default PopularMovieSlide;
