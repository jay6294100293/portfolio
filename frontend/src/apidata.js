import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/portfolio';

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    about_data: null,
    profile_data: null,
    project_data: null,
    education_data: null,
    experience_data: null,
    skills_data: null,
    testimonial_data: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        ] = await Promise.all([
          fetch(`${API_URL}/accomplishment/1/`).then(res => {
            if (!res.ok) throw new Error(`accomplishment: ${res.status}`);
            return res.json();
          }),
          fetch(`${API_URL}/profiles/1/`).then(res => {
            if (!res.ok) throw new Error(`profiles: ${res.status}`);
            return res.json();
          }),
          fetch(`${API_URL}/profiles/1/projects/`).then(res => {
            if (!res.ok) throw new Error(`projects: ${res.status}`);
            return res.json();
          }),
          fetch(`${API_URL}/educations/?profile_id=1`).then(res => {
            if (!res.ok) throw new Error(`educations: ${res.status}`);
            return res.json();
          }),
          fetch(`${API_URL}/work-experiences/?profile_id=1`).then(res => {
            if (!res.ok) throw new Error(`work-experiences: ${res.status}`);
            return res.json();
          }),
          fetch(`${API_URL}/skill-groups/?profile_id=1`).then(res => {
            if (!res.ok) throw new Error(`skill-groups: ${res.status}`);
            return res.json();
          }),
          fetch(`${API_URL}/certifications/?profile_id=1`).then(res => {
            if (!res.ok) throw new Error(`certifications: ${res.status}`);
            return res.json();
          }),
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
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return React.useContext(DataContext);
};

export default DataContext;
