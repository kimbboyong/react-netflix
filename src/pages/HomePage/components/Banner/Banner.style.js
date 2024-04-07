import { styled } from "styled-components";

export const MovieBanner = styled.div`
  width: 100%;
  height: 56vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    background: linear-gradient(to top, #000, transparent);
    left: 0;
    height: 56vh;
    width: 100%;
  }
`;

export const MovieText = styled.div`
  width: 100%;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: #fff;
`;
