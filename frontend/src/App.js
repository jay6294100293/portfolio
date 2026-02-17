import React from 'react';
import './App.css';
import { useData } from './apidata';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import NavbarComponent from './components/header/Header';
import LoadingAnimation from './components/LoadingAnimation';
import './components/LoadingAnimation.css';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

const App = () => {
  const { loading, error } = useData();

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <i className="uil uil-exclamation-triangle error-icon"></i>
          <h2>Something went wrong</h2>
          <p>We couldn't load the portfolio data. Please try again later.</p>
          <button
            className="button button--flex"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <NavbarComponent />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </ErrorBoundary>
  );
};

export default App;
