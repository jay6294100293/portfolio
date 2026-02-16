import React, { useState, useEffect } from "react";
import { useData } from "../../apidata"; // Import the useData hook
import "./work.css";
import "./navigation.css";

const Projects = () => {
  const { data, loading } = useData(); // Access data and loading state from the context
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = data.project_data || []; // Fallback to an empty array if no projects data is available

  const projectTopics = [...new Set(projects.map((project) => project.project_topic))];
  projectTopics.unshift("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.project_topic === selectedCategory);

  return (
    <section id="portfolio" className="work section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="work__filters">
        {projectTopics.map((topic, index) => (
          <span
            key={index}
            className={`work__item ${selectedCategory === topic && "active-work"}`}
            onClick={() => filterProjects(topic)}
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {filteredProjects.map((project) => (
          <div className="work__card" key={project.id}>
            <img src={project.project_pic} alt={project.title} className="work__img" />
            <h3 className="work__title">{project.title}</h3>
            <p className="work__description">{project.short_description}</p>
            <div className="work__buttons">
              <a href={project.github_link} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href={project.project_link} className="work__button" target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
