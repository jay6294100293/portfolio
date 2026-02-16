// import React from "react";
// import "./footer.css";
//
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__container container">
//         <h1 className="footer__title">MG</h1>
//
//         <ul className="footer__list">
//           <li>
//             <a href="#about" className="footer__link">
//               About
//             </a>
//           </li>
//
//           <li>
//             <a href="#portfolio" className="footer__link">
//               Projects
//             </a>
//           </li>
//
//           <li>
//             <a href="#certifications" className="footer__link">
//               Certifications
//             </a>
//           </li>
//         </ul>
//
//         <div className="footer__social">
//           <a
//             href="https://www.facebook.com/"
//             className="footer__social-link"
//             target="_blank"
//           >
//             <i className="bx bxl-facebook"></i>
//           </a>
//
//           <a
//             href="https://www.instagram.com/"
//             className="footer__social-link"
//             target="_blank"
//           >
//             <i className="bx bxl-instagram"></i>
//           </a>
//
//           <a
//             href="https://twitter.com/"
//             className="footer__social-link"
//             target="_blank"
//           >
//             <i className="bx bxl-twitter"></i>
//           </a>
//         </div>
//
//         <span className="footer__copy">
//           &#169; Mrityunjay Gupta. All rigths reserved
//         </span>
//       </div>
//     </footer>
//   );
// };
//
// export default Footer;

import React, { useState, useEffect } from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/social/1/");
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">MG</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#certifications" className="footer__link">
              Certifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href={footerData?.linkedin}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href={footerData?.github}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={"mailto:" + footerData?.email}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Mrityunjay Gupta. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
