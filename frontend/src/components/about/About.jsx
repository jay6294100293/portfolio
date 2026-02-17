import React from "react";
import "./about.css";
import Info from "./Info";
import { useData } from "../../apidata";

const About = () => {
  const { data } = useData();
  const userData = data.profile_data;

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        {userData && (
          <img
            src={userData.profile_pic}
            alt={`${userData.first_name} ${userData.last_name}`}
            className="about__img"
          />
        )}

        <div className="about__data">
          <Info />
          {userData && (
            <>
              <p className="about__description">{userData.about_me_intro}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
