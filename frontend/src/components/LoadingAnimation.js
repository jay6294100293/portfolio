import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json'; // Adjust the path based on your directory structure

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="loading-container">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoadingAnimation;
