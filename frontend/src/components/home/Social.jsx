import React from "react";
import { useData } from "../../apidata";

const Social = () => {
  const { data } = useData();
  const profile = data.profile_data;

  return (
    <div className="home__social">
      <a
        href={profile?.linkedin || "#"}
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href={profile?.github || "#"}
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        href={`mailto:${profile?.email || ""}`}
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
