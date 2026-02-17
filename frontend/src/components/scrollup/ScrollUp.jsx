import React, { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`scrollup${showScroll ? " show-scroll" : ""}`}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
