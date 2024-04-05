import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Inner,
  InputText,
  Logo,
  Nav,
  Search,
  Txt,
  Wrapper,
} from "./Header.style";

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <Nav>
          <Logo>
            <img src="/images/logo.png" alt="" />
          </Logo>
          <Txt>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Txt>
        </Nav>
        <Search>
          <InputText type="text" placeholder="Search" />
          <Button variant="contained" color="error">
            검색
          </Button>
        </Search>
      </Inner>
    </Wrapper>
  );
};

export default Header;
