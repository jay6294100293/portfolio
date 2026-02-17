import React, { useState } from "react";
import { useData } from "../../apidata";
import "./services.css";

const sanitizeText = (html) => {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const Services = () => {
  const { data } = useData();
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const options = { year: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const services = data.experience_data || [];

  return (
    <section className="services section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Click view more for details</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={service.id}>
            <div className="services__data">
              <img
                src={service.company_logo}
                alt={service.company}
                className="services__img"
              />
              <h3 className="services__title">{service.title}</h3>
              <p className="services__dates">
                {formatDate(service.start_date)} - {formatDate(service.end_date)}
              </p>
            </div>

            <span
              className="services__button"
              onClick={() => toggleTab(index)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === index
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(null)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {sanitizeText(service.responsibilities)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
