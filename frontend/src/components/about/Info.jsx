import React from "react";
import { useData } from "../../apidata";

const Info = () => {
  const { data } = useData();
  const infoData = data.about_data;

  return (
    <div className="about__info grid">
      {infoData && (
        <>
          <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
              {infoData.years_experience} Years{" "}
              {infoData.months_experience} Months IT Exp
            </span>
          </div>
          <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">
              {infoData.projects_completed} Projects
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
