import React, { useState } from "react";
import { useData } from "../../apidata"; // Import the useData hook
import "./qualification.css";

const Qualification = () => {
  const { data, loading } = useData(); // Access data and loading state from the context
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const qualifications = data.education_data || []; // Fallback to an empty array if no qualifications data is available

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {qualifications.map((qualification) => (
              <div className="qualification__data" key={qualification.id}>
                {qualification.id % 2 === 0 ? (
                  <>
                    <div className="qualification__right">
                      {/* Your content for the right side */}
                    </div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>

                    <div className="qualification__left">
                      <div>
                        <h3 className="qualification__title">{qualification.degree}</h3>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i> {new Date(qualification.completion_date).toLocaleString('default', {
                            year: 'numeric',
                            month: 'short'
                          })}
                        </div>
                        <span className="qualification__subtitle">
                          <h6>{qualification.institution}</h6>
                          <p>{qualification.degree_city}</p>
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="qualification__left">
                      <div>
                        <h3 className="qualification__title">{qualification.degree}</h3>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i> {new Date(qualification.completion_date).toLocaleString('default', {
                            year: 'numeric',
                            month: 'short'
                          })}
                        </div>
                        <span className="qualification__subtitle">
                          <h6>{qualification.institution}</h6>
                          <p>{qualification.degree_city}</p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                    <div className="qualification__right">
                      {/* Your content for the right side */}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Experience content goes here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
