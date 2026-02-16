import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useData } from "../../apidata";

const Footer = () => {
  const { data } = useData();
  const footerData = data.profile_data;

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
            href={footerData?.linkedin || "#"}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href={footerData?.github || "#"}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={"mailto:" + (footerData?.email || "")}
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
