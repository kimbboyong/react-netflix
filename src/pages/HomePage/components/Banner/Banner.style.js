import { styled } from "styled-components";

export const MovieBanner = styled.div`
  width: 100%;
  height: 56vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  &::before {
    content: "";
    display: inline-block;
    background: linear-gradient(to top, #000, transparent);
    position: absolute;
    top: 0;
    left: 0;
    height: 56vh;
    width: 100%;
  }
`;

export const MovieText = styled.div`
  width: 100%;
  max-width: 500px;
  z-index: 2;
  color: #fff;
`;
