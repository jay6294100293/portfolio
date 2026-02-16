import React, { useState } from "react";
import { useData } from "../../apidata"; // Import the useData hook
import "./skills.css";

const Skills = () => {
  const { data, loading } = useData(); // Access data and loading state from the context
  const skillsData = data.skills_data || []; // Fallback to an empty array if no skills data is available

  const renderSkills = () => {
    return skillsData.map((skill, index) => (
      <div className="skills__content" key={index}>
        {/*<h3 className="skills__title">{skill.title}</h3>*/}
        <div className="skills__box">
          {skill.names
            .sort((a, b) => {
              const levelsOrder = { 'Advance': 1, 'Intermediate': 2, 'Basic': 3 };
              return levelsOrder[a.level] - levelsOrder[b.level];
            }) // Sort by level
            .map((item, i) => (
              <div className="skills__group" key={i}>
                <div className="skills__data">
                  <i className="bx bx-badge-check"></i>
                  <div className="skills__info">
                    <h3 className="skills__name">{item.name}</h3>
                    <span className="skills__level">{item.level}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    ));
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        {renderSkills()}
      </div>
    </section>
  );
};

export default Skills;
