//Component displaying the navigation bar

import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/Logo.png" alt="Logo" className="logo_nav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-center justify-content-lg-start"
        >
          <Nav className="me-auto">
            <NavLink to="/regular" className="nav-link ">
              Regular
            </NavLink>

            <NavLink to="/hot" className="nav-link">
              Hot
            </NavLink>

            <NavLink to="/favorite" className="nav-link">
              Favorite
            </NavLink>

            <NavLink to="/addMeme" className="nav-link">
              Add Meme
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
