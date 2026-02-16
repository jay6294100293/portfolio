import React from "react";

const Social = ({ linkedinUrl, githubUrl, gmailUrl }) => {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/gupta-mrityunjay"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/jay6294100293"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        href={"mailto:"+gmailUrl}
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
