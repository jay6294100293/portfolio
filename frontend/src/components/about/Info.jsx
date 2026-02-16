// import React from "react";
//
// const Info = () => {
//   return (
//     <div className="about__info grid">
//       <div className="about__box">
//         <i class="bx bx-award about__icon"></i>
//
//         <h3 className="about__title">Experience</h3>
//         <span className="about__subtitle">8 Years Working</span>
//       </div>
//
//       <div className="about__box">
//         <i class="bx bx-briefcase-alt about__icon"></i>
//
//         <h3 className="about__title">Completed</h3>
//         <span className="about__subtitle">48 + Projects</span>
//       </div>
//
//       <div className="about__box">
//         <i class="bx bx-support about__icon"></i>
//
//         <h3 className="about__title">Support</h3>
//         <span className="about__subtitle">Online 24/7</span>
//       </div>
//     </div>
//   );
// };
//
// export default Info;

import React, { useState, useEffect } from "react";

const Info = () => {
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/accomplishment/1/");
        const data = await response.json();
        setInfoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          {/*<div className="about__box">*/}
          {/*  <i className="bx bx-support about__icon"></i>*/}
          {/*  <h3 className="about__title">Highest Education</h3>*/}
          {/*    <span className="about__subtitle">*/}
          {/*    {infoData.highest_education} Projects*/}
          {/*  </span>*/}
          {/*</div>*/}
        </>
      )}
    </div>
  );
};

export default Info;
