import React, { useEffect, useState } from "react";
import Social from "./Social";

const ParentComponent = () => {
  const [socialUrls, setSocialUrls] = useState({
    linkedinUrl: "",
    githubUrl: "",
    gmailUrl: ""
  });

  useEffect(() => {
    // Fetch API data
    fetch("https://mrityunjay6294.pythonanywhere.com/portfolio/profiles/1/")
      .then((response) => response.json())
      .then((data) => {
        const { linkedin, github, gmail } = data;
        console.log("LinkedIn URL:", linkedin);
        console.log("GitHub URL:", github);
        console.log("Gmail URL:", gmail);
        setSocialUrls({
          linkedinUrl: linkedin,
          githubUrl: github,
          gmailUrl: gmail
        });
      })
      .catch((error) => console.error("Error fetching API data:", error));
  }, []);

  return (
    <div>
      {/* Pass fetched social media URLs as props */}
      <Social {...socialUrls} />
    </div>
  );
};

export default ParentComponent;
