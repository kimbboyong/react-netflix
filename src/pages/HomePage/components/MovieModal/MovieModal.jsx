import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import SkeletonBanner from "../../../../components/Skeleton/SkeletonBanner";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import "./MovieModal.style.css";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 800px;
  height: 84vh;
  overflow: auto;
  background-color: #111;
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    max-width: 100%;
  }
`;

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const bgBaseUrl = "https://image.tmdb.org/t/p/original/";
  const ref = useRef();
  useOnClickOutside(ref, () => setModalOpen(false));

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <ModalBackground>
      <Modal ref={ref}>
        <div className="modal__header">
          {isLoading && (
            <SkeletonBanner ModalHeight={"45vh"} ModalMargin={"0"} />
          )}
          <img
            src={bgBaseUrl + backdrop_path}
            alt="card"
            onLoad={handleImageLoaded}
          />

          <button className="modal__close" onClick={() => setModalOpen(false)}>
            <strong>&times;</strong>
          </button>
        </div>

        <div className="modal__body">
          <div className="modal__detail">
            <span>97% 일치</span> {release_date ? release_date : first_air_date}
          </div>

          <h2 className="modal__title">{title ? title : name}</h2>

          <div className="modal__average">평점 : {vote_average}</div>

          <p className="modal__overview">{overview}</p>
        </div>
      </Modal>
    </ModalBackground>
  );
};

export default MovieModal;
