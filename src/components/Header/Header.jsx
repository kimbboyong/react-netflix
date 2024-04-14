import React, { useState } from "react";
import { Container, Navbar, Button, Form, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Logo, Txt } from "./Header.style";

const Wrapper = styled.div`
  .navBar {
    padding: 20px;
  }
  .container-fluid {
    gap: 20px;
  }

  input {
    &:focus {
      box-shadow: none;
      border: none;
    }
  }
`;

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <Wrapper>
      <Navbar className="navBar" expand="lg" variant="dark">
        <Container fluid>
          <Logo
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/images/logo.png" alt="" />
          </Logo>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Txt>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
              </Txt>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                variant="outline-light"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <Button type="submit" variant="outline-danger">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
