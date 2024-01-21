import { Navbar, Container, Nav } from "react-bootstrap";
//import { useState } from "react";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
const NavbarComponent = () => {
  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary mb-5">
        <Container>
          <Navbar.Brand href="#home">Farda.Id</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="button-collapse">
              <button className="Button">Hire Me!</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
