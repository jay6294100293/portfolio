import React, { useState, useEffect } from "react";
import { useData } from "../../apidata";
import CV from "../../assets/Smith-Cv.pdf";

const Data = () => {
  const { data } = useData();
  const [jobIndex, setJobIndex] = useState(0);

  const userData = data.profile_data;

  useEffect(() => {
    if (userData && userData.job_title) {
      const interval = setInterval(() => {
        setJobIndex((prevIndex) => (prevIndex + 1) % userData.job_title.split(" / ").length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [userData]);

  if (!userData) {
    return null;
  }

  const { first_name, last_name, job_title, about_me } = userData;
  const jobTitles = job_title.split(" / ");

  const getJobTitleClass = (index) => {
    switch (index) {
      case 0:
        return "job-title-machine-learning";
      case 1:
        return "job-title-data-scientist";
      case 2:
        return "job-title-data-analyst";
      case 3:
        return "job-title-data-science";
      default:
        return "";
    }
  };

  return (
    <div className="home__data">
      <h1 className="home__title">
        {first_name} {last_name}
      </h1>
      <div className={`job-title ${getJobTitleClass(jobIndex)}`}>
        {jobTitles[jobIndex]}
      </div>
      <p className="home__description">{about_me}</p>

      <div className="home__buttons">
        <a href="#contact" className="button button--flex">
          Say Hello
          <svg
            className="button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
              fill="var(--container-color)"
            ></path>
            <path
              d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
              fill="var(--container-color)"
            ></path>
          </svg>
        </a>

        <a href={CV} download className="button button--flex button--ghost">
          Download CV
          <svg
            className="button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
              fill="currentColor"
            ></path>
            <path
              d="M12 12.75C11.59 12.75 11.25 12.41 11.25 12V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V12C12.75 12.41 12.41 12.75 12 12.75Z"
              fill="currentColor"
            ></path>
            <path
              d="M12 12.7502C11.81 12.7502 11.62 12.6802 11.47 12.5302L8.47 9.53024C8.18 9.24024 8.18 8.76024 8.47 8.47024C8.76 8.18024 9.24 8.18024 9.53 8.47024L12 10.9402L14.47 8.47024C14.76 8.18024 15.24 8.18024 15.53 8.47024C15.82 8.76024 15.82 9.24024 15.53 9.53024L12.53 12.5302C12.38 12.6802 12.19 12.7502 12 12.7502Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Data;
