import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Search from "./Search";

const navbarStyle = {
  backgroundColor: "lightblue",
};

function Header({ title }) {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
