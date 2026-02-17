import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/portfolio';

const fetchJson = async (url, fallback = null) => {
  try {
    const res = await fetch(url);
    if (!res.ok) return fallback;
    const json = await res.json();
    return json.results !== undefined ? json.results : json;
  } catch {
    return fallback;
  }
};

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
          fetchJson(`${API_URL}/accomplishment/1/`, {}),
          fetchJson(`${API_URL}/profiles/1/`, {}),
          fetchJson(`${API_URL}/profiles/1/projects/`, []),
          fetchJson(`${API_URL}/educations/?profile_id=1`, []),
          fetchJson(`${API_URL}/work-experiences/?profile_id=1`, []),
          fetchJson(`${API_URL}/skill-groups/?profile_id=1`, []),
          fetchJson(`${API_URL}/certifications/?profile_id=1`, []),
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
