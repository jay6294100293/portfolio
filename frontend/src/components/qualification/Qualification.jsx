import React, { useState } from "react";
import { useData } from "../../apidata";
import "./qualification.css";

const Qualification = () => {
  const { data } = useData();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const qualifications = data.education_data || [];
  const experiences = data.experience_data || [];

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    return new Date(dateString).toLocaleString('default', {
      year: 'numeric',
      month: 'short',
    });
  };

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
            {qualifications.map((qualification, index) => (
              <div className="qualification__data" key={qualification.id}>
                {index % 2 === 0 ? (
                  <>
                    <div className="qualification__left">
                      <div>
                        <h3 className="qualification__title">{qualification.degree}</h3>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i> {formatDate(qualification.completion_date)}
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
                    <div className="qualification__right"></div>
                  </>
                ) : (
                  <>
                    <div className="qualification__right"></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                    <div className="qualification__left">
                      <div>
                        <h3 className="qualification__title">{qualification.degree}</h3>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i> {formatDate(qualification.completion_date)}
                        </div>
                        <span className="qualification__subtitle">
                          <h6>{qualification.institution}</h6>
                          <p>{qualification.degree_city}</p>
                        </span>
                      </div>
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
            {experiences.map((experience, index) => (
              <div className="qualification__data" key={experience.id}>
                {index % 2 === 0 ? (
                  <>
                    <div className="qualification__left">
                      <div>
                        <h3 className="qualification__title">{experience.title}</h3>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i>{' '}
                          {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                        </div>
                        <span className="qualification__subtitle">
                          <h6>{experience.company}</h6>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                    <div className="qualification__right"></div>
                  </>
                ) : (
                  <>
                    <div className="qualification__right"></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                    <div className="qualification__left">
                      <div>
                        <h3 className="qualification__title">{experience.title}</h3>
                        <div className="qualification__calender">
                          <i className="uil uil-calendar-alt"></i>{' '}
                          {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                        </div>
                        <span className="qualification__subtitle">
                          <h6>{experience.company}</h6>
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
