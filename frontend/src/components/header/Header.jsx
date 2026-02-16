import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./header.css";

const NavbarComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#" className="nav-brand-custom">MG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className="nav-toggle-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${toggle ? 'slide-in' : 'slide-out'}`} style={{ marginRight: '0', paddingRight: '20px' }}>
            <Nav.Link href="#home" onClick={() => setActiveNav("#home")} className={`nav-link-custom ${activeNav === "#home" ? "active-link" : ""}`}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => setActiveNav("#about")} className={`nav-link-custom ${activeNav === "#about" ? "active-link" : ""}`}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setActiveNav("#skills")} className={`nav-link-custom ${activeNav === "#skills" ? "active-link" : ""}`}>Skills</Nav.Link>
            <Nav.Link href="#services" onClick={() => setActiveNav("#services")} className={`nav-link-custom ${activeNav === "#services" ? "active-link" : ""}`}>Experience</Nav.Link>
            <Nav.Link href="#qualification" onClick={() => setActiveNav("#qualification")} className={`nav-link-custom ${activeNav === "#qualification" ? "active-link" : ""}`}>Qualification</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={`nav-link-custom ${activeNav === "#portfolio" ? "active-link" : ""}`}>Projects</Nav.Link>
            <Nav.Link href="#certifications" onClick={() => setActiveNav("#certifications")} className={`nav-link-custom ${activeNav === "#certifications" ? "active-link" : ""}`}>Certifications</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setActiveNav("#contact")} className={`nav-link-custom ${activeNav === "#contact" ? "active-link" : ""}`}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
