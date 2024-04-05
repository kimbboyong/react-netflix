import React from "react";
import { Container, Navbar, Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Logo, Txt } from "./Header.style";
// import {
//   Inner,
//   InputText,
//   Logo,
//   Nav,
//   Search,
//   Txt,
//   Wrapper,
//   Button,
// } from "./Header.style";

const Wrapper = styled.div`
  .navBar {
    padding: 0 20px;
    height: 80px;
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
  return (
    <Wrapper>
      <Navbar className="navBar" expand="lg" variant="dark">
        <Container fluid>
          <Logo>
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
            <Form className="d-flex ">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                variant="outline-light"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>

    // <Wrapper>
    //   <Inner>
    //     <Nav>
    //       <Logo>
    //         <img src="/images/logo.png" alt="" />
    //       </Logo>
    //       <Txt>
    //         <Link to="/">Home</Link>
    //         <Link to="/movies">Movies</Link>
    //       </Txt>
    //     </Nav>
    //     <Search>
    //       <InputText type="text" placeholder="Search" />
    //     </Search>
    //   </Inner>
    // </Wrapper>
  );
};

export default Header;
