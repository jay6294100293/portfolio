import React, { Suspense, useEffect } from 'react';
import './App.css';
import { useData } from './apidata';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import NavbarComponent from './components/header/Header';
import LoadingAnimation from './components/LoadingAnimation';
import './components/LoadingAnimation.css';

const Home = React.lazy(() => import('./components/home/Home'));
const About = React.lazy(() => import('./components/about/About'));
const Skills = React.lazy(() => import('./components/skills/Skills'));
const Services = React.lazy(() => import('./components/services/Services'));
const Qualification = React.lazy(() => import('./components/qualification/Qualification'));
const Work = React.lazy(() => import('./components/Portfolio/Work'));
const Testimonials = React.lazy(() => import('./components/testimonials/Testimonials'));
const Contact = React.lazy(() => import('./components/contact/Contact'));

const App = () => {
  const { loading, error } = useData();

  useEffect(() => {
    const componentsToPreload = [
      import('./components/home/Home'),
      import('./components/about/About'),
      import('./components/skills/Skills'),
      import('./components/services/Services'),
      import('./components/qualification/Qualification'),
      import('./components/Portfolio/Work'),
      import('./components/testimonials/Testimonials'),
      import('./components/contact/Contact'),
    ];
    Promise.all(componentsToPreload);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <NavbarComponent />
      <main className="main">
        <Suspense fallback={<LoadingAnimation />}>
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
