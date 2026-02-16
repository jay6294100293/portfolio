// src/apidata.js
import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    about_data: null,
    profile_data: null,
    project_data: null,
    education_data: null,
    experience_data: null,
    skills_data: null,
    testimonial_data: null,
    profile_pic:null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          about_data,
          profile_data,
          project_data,
          education_data,
          experience_data,
          skills_data,
          testimonial_data,
          profile_pic
        ] = await Promise.all([
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/accomplishment/1/').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/profiles/1/').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/profiles/1/projects/').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/educations/?profile_id=1').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/work-experiences/?profile_id=1').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/skill-groups/?profile_id=1').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1').then(response => response.json()),
          fetch('https://mrityunjay6294.pythonanywhere.com/portfolio/certifications/?profile_id=1').then(response => response.json()),
        ]);

        setData({
          about_data,
          profile_data,
          project_data,
          education_data,
          experience_data,
          skills_data,
          testimonial_data,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return React.useContext(DataContext);
};

export default DataContext;
