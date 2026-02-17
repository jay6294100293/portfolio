import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./header.css";

const NavbarComponent = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#" className="nav-brand-custom">MG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ marginRight: '0', paddingRight: '20px' }}>
            <Nav.Link href="#home" onClick={() => setActiveNav("#home")} className={`nav-link-custom ${activeNav === "#home" ? "active-link" : ""}`}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => setActiveNav("#about")} className={`nav-link-custom ${activeNav === "#about" ? "active-link" : ""}`}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setActiveNav("#skills")} className={`nav-link-custom ${activeNav === "#skills" ? "active-link" : ""}`}>Skills</Nav.Link>
            <Nav.Link href="#experience" onClick={() => setActiveNav("#experience")} className={`nav-link-custom ${activeNav === "#experience" ? "active-link" : ""}`}>Experience</Nav.Link>
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
