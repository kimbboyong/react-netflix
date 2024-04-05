import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  background-color: #000;
`;
export const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Txt = styled.div`
  display: flex;
  gap: 10px;
  a {
    color: #ccc;
  }
`;

export const Logo = styled.div`
  max-width: 150px;
  img {
    max-width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  gap: 10px;
`;
export const InputText = styled.input`
  padding: 0 10px;
  border-radius: 8px;
  font-size: 18px;
  color: #fff;
  border: 1px solid #424446;
  background: #24292d;
`;
