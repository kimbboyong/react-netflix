import { styled } from "styled-components";

export const Card = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  img {
    border-radius: 18px;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    vertical-align: top;
    height: auto;
  }
`;

export const Txt = styled.strong`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;
