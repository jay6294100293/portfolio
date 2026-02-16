// // import React, { useState } from "react";
// // import "./header.css";
// //
// // const Header = () => {
// //   /*=============== Change Background Header ===============*/
// //   window.addEventListener("scroll", function () {
// //     const header = document.querySelector(".header");
// //     // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
// //     if (this.scrollY >= 80) header.classList.add("scroll-header");
// //     else header.classList.remove("scroll-header");
// //   });
// //
// //   /*=============== Toggle Menu ===============*/
// //   const [Toggle, showMenu] = useState(false);
// //   const [activeNav, setActiveNav] = useState("#home");
// //
// //   return (
// //     <header className="header">
// //       <nav className="nav container">
// //         <a href="index.html" className="nav__logo">
// //           MG
// //         </a>
// //
// //         <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
// //           <ul className="nav__list grid">
// //             <li className="nav__item">
// //               <a
// //                   href="#home"
// //                   onClick={() => setActiveNav("#home")}
// //                   className={
// //                     activeNav === "#home" ? "nav__link active-link" : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-estate nav__icon"></i> Home
// //               </a>
// //             </li>
// //
// //             <li className="nav__item">
// //               <a
// //                   href="#about"
// //                   onClick={() => setActiveNav("#about")}
// //                   className={
// //                     activeNav === "#about" ? "nav__link active-link" : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-user nav__icon"></i> About
// //               </a>
// //             </li>
// //
// //             <li className="nav__item">
// //               <a
// //                   href="#skills"
// //                   onClick={() => setActiveNav("#skills")}
// //                   className={
// //                     activeNav === "#skills"
// //                         ? "nav__link active-link"
// //                         : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-file-alt nav__icon"></i> Skills
// //               </a>
// //             </li>
// //
// //             <li className="nav__item">
// //               <a
// //                   href="#services"
// //                   onClick={() => setActiveNav("#services")}
// //                   className={
// //                     activeNav === "#services"
// //                         ? "nav__link active-link"
// //                         : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-briefcase-alt nav__icon"></i> Experience
// //               </a>
// //             </li>
// //             <li className="nav__item">
// //               <a
// //                   href="#qualification"
// //                   onClick={() => setActiveNav("#qualification")}
// //                   className={
// //                     activeNav === "#qualification"
// //                         ? "nav__link active-link"
// //                         : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-message nav__icon"></i> Qualification
// //               </a>
// //             </li>
// //
// //             <li className="nav__item">
// //               <a
// //                   href="#portfolio"
// //                   onClick={() => setActiveNav("#portfolio")}
// //                   className={
// //                     activeNav === "#portfolio"
// //                         ? "nav__link active-link"
// //                         : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-scenery nav__icon"></i> Projects
// //               </a>
// //             </li>
// //
// //             <li className="nav__item">
// //               <a
// //                   href="#certifications"
// //                   onClick={() => setActiveNav("#certifications")}
// //                   className={
// //                     activeNav === "#certifications"
// //                         ? "nav__link active-link"
// //                         : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-message nav__icon"></i> Certifications
// //               </a>
// //             </li>
// //             <li className="nav__item">
// //               <a
// //                   href="#contact"
// //                   onClick={() => setActiveNav("#contact")}
// //                   className={
// //                     activeNav === "#contact"
// //                         ? "nav__link active-link"
// //                         : "nav__link"
// //                   }
// //               >
// //                 <i className="uil uil-message nav__icon"></i> Contact
// //               </a>
// //             </li>
// //           </ul>
// //
// //           <i
// //               className="uil uil-times nav__close"
// //               onClick={() => showMenu(!Toggle)}
// //           ></i>
// //         </div>
// //
// //         <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
// //           <i className="uil uil-apps"></i>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };
// //
// // export default Header;
//
// import React, { useState } from "react";
// import { Navbar, Nav } from 'react-bootstrap';
//
// const NavbarComponent = () => {
//   const [toggle, setToggle] = useState(false);
//   const [activeNav, setActiveNav] = useState("#home");
//
//   const handleToggle = () => {
//     setToggle(!toggle);
//   }
//
//   return (
//     <Navbar bg="light" variant="light" expand="lg">
//       <div className="container">
//         <Navbar.Brand href="#" style={{ color: 'black', marginRight: 'auto' , fontWeight: 500}}>MG</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className={`ms-auto ${toggle ? 'slide-in' : 'slide-out'}`} style={{ marginRight: '0', paddingRight: '20px' }}>
//             <Nav.Link href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , fontWeight: 500}}>Home</Nav.Link>
//             <Nav.Link href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , fontWeight: 500 }}>About</Nav.Link>
//             <Nav.Link href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , fontWeight: 500}}>Skills</Nav.Link>
//             <Nav.Link href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , fontWeight: 500}}>Experience</Nav.Link>
//             <Nav.Link href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px', fontWeight: 500}}>Qualification</Nav.Link>
//             <Nav.Link href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , fontWeight: 500}}>Projects</Nav.Link>
//             <Nav.Link href="#certifications" onClick={() => setActiveNav("#certifications")} className={activeNav === "#certifications" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , fontWeight: 500}}>Certifications</Nav.Link>
//             <Nav.Link href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '0' , fontWeight: 500}}>Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// };
//
// export default NavbarComponent;
//


import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#" style={{ color: 'black', marginRight: 'auto', marginLeft: '20px', fontWeight: 500 }}>MG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} style={{ marginRight: '20px' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${toggle ? 'slide-in' : 'slide-out'}`} style={{ marginRight: '0', paddingRight: '20px' }}>

            <Nav.Link href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , marginLeft: '20px', fontWeight: 500, textAlign: "right"}}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , marginLeft: '20px', fontWeight: 500 , textAlign: "right"}}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px', marginLeft: '20px' , fontWeight: 500, textAlign: "right"}}>Skills</Nav.Link>
            <Nav.Link href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , marginLeft: '20px', fontWeight: 500, textAlign: "right"}}>Experience</Nav.Link>
            <Nav.Link href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px', marginLeft: '20px', fontWeight: 500, textAlign: "right"}}>Qualification</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , marginLeft: '20px', fontWeight: 500, textAlign: "right"}}>Projects</Nav.Link>
             <Nav.Link href="#certifications" onClick={() => setActiveNav("#certifications")} className={activeNav === "#certifications" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , marginLeft: '20px' , fontWeight: 500, textAlign: "right"}}>Certifications</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"} style={{ color: 'black', marginRight: '20px' , marginLeft: '20px' , fontWeight: 500, textAlign: "right"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
