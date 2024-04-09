import React, { useState } from "react";
import MovieCard from "../../pages/HomePage/components/MovieCard/MovieCard";
import MovieModal from "../../pages/HomePage/components/MovieModal/MovieModal";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../pages/HomePage/components/MovieCard/MovieCard.style.css";
import { styled } from "styled-components";

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

const MovieSlider = ({ title, movies }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleMovieClick = async (movie) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <>
      <h3>{title}</h3>
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
        {movies.map((movie, idx) => (
          <CustomSwiperSlide
            key={idx}
            onClick={() => {
              handleMovieClick(movie);
            }}
          >
            <MovieCard movie={movie} />
          </CustomSwiperSlide>
        ))}
      </Swiper>
      {modalOpen && (
        <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default MovieSlider;
