// // // // // import React from 'react';
// // // // // import "./App.css";
// // // // //
// // // // // import Home from './components/home/Home';
// // // // // import About from './components/about/About';
// // // // // import Skills from './components/skills/Skills';
// // // // // import Services from './components/services/Services';
// // // // // import Qualification from './components/qualification/Qualification';
// // // // // import Work from './components/Portfolio/Work';
// // // // // import Testimonials from './components/testimonials/Testimonials';
// // // // // import Contact from './components/contact/Contact';
// // // // // import Footer from './components/footer/Footer';
// // // // // import ScrollUp from './components/scrollup/ScrollUp';
// // // // //
// // // // // import NavbarComponent from "./components/header/Header";
// // // // //
// // // // // const App = () => {
// // // // //   return (
// // // // //     <>
// // // // //     {/*<Header />*/}
// // // // //         <NavbarComponent />
// // // // //
// // // // //     <main className='main'>
// // // // //       <Home />
// // // // //       <About />
// // // // //       <Skills />
// // // // //       <Services />
// // // // //       <Qualification />
// // // // //       <Work />
// // // // //       <Testimonials />
// // // // //       <Contact />
// // // // //     </main>
// // // // //
// // // // //     <Footer />
// // // // //     <ScrollUp />
// // // // //     </>
// // // // //   )
// // // // // }
// // // // //
// // // // // export default App
// // // //
// // // // // src/App.js
// // // // import React from 'react';
// // // // import './App.css';
// // // // import { DataProvider } from './apidata';
// // // // import Home from './components/home/Home';
// // // // import About from './components/about/About';
// // // // import Skills from './components/skills/Skills';
// // // // import Services from './components/services/Services';
// // // // import Qualification from './components/qualification/Qualification';
// // // // import Work from './components/Portfolio/Work';
// // // // import Testimonials from './components/testimonials/Testimonials';
// // // // import Contact from './components/contact/Contact';
// // // // import Footer from './components/footer/Footer';
// // // // import ScrollUp from './components/scrollup/ScrollUp';
// // // // import NavbarComponent from './components/header/Header';
// // // //
// // // // const App = () => {
// // // //   return (
// // // //     <DataProvider>
// // // //       <>
// // // //         <NavbarComponent />
// // // //         <main className="main">
// // // //           <Home />
// // // //           <About />
// // // //           <Skills />
// // // //           <Services />
// // // //           <Qualification />
// // // //           <Work />
// // // //           <Testimonials />
// // // //           <Contact />
// // // //         </main>
// // // //         <Footer />
// // // //         <ScrollUp />
// // // //       </>
// // // //     </DataProvider>
// // // //   );
// // // // };
// // // //
// // // // export default App;
// // //
// // // // src/App.js
// // // import React from 'react';
// // // import './App.css';
// // // import { DataProvider, useData } from './apidata'; // Ensure useData is correctly imported
// // // import Home from './components/home/Home';
// // // import About from './components/about/About';
// // // import Skills from './components/skills/Skills';
// // // import Services from './components/services/Services';
// // // import Qualification from './components/qualification/Qualification';
// // // import Work from './components/Portfolio/Work';
// // // import Testimonials from './components/testimonials/Testimonials';
// // // import Contact from './components/contact/Contact';
// // // import Footer from './components/footer/Footer';
// // // import ScrollUp from './components/scrollup/ScrollUp';
// // // import NavbarComponent from './components/header/Header';
// // // import LoadingAnimation from './components/LoadingAnimation'; // Import the LoadingAnimation component
// // // import './components/LoadingAnimation.css'; // Import the CSS for loading animation
// // //
// // // const App = () => {
// // //   const { loading } = useData(); // Access loading state from the context
// // //
// // //   if (loading) {
// // //     return <LoadingAnimation />; // Show loading animation while data is being fetched
// // //   }
// // //
// // //   return (
// // //     <DataProvider>
// // //       <>
// // //         <NavbarComponent />
// // //         <main className="main">
// // //           <Home />
// // //           <About />
// // //           <Skills />
// // //           <Services />
// // //           <Qualification />
// // //           <Work />
// // //           <Testimonials />
// // //           <Contact />
// // //         </main>
// // //         <Footer />
// // //         <ScrollUp />
// // //       </>
// // //     </DataProvider>
// // //   );
// // // };
// // //
// // // export default App;
// //
// // // src/App.js
// // import React from 'react';
// // import './App.css';
// // import { useData } from './apidata';
// // import Home from './components/home/Home';
// // import About from './components/about/About';
// // import Skills from './components/skills/Skills';
// // import Services from './components/services/Services';
// // import Qualification from './components/qualification/Qualification';
// // import Work from './components/Portfolio/Work';
// // import Testimonials from './components/testimonials/Testimonials';
// // import Contact from './components/contact/Contact';
// // import Footer from './components/footer/Footer';
// // import ScrollUp from './components/scrollup/ScrollUp';
// // import NavbarComponent from './components/header/Header';
// // import LoadingAnimation from './components/LoadingAnimation'; // Import the LoadingAnimation component
// // import './components/LoadingAnimation.css'; // Import the CSS for loading animation
// //
// // const App = () => {
// //   const { loading } = useData(); // Access loading state from the context
// //
// //   if (loading) {
// //     return <LoadingAnimation />; // Show loading animation while data is being fetched
// //   }
// //
// //   return (
// //     <>
// //       <NavbarComponent />
// //       <main className="main">
// //         <Home />
// //         <About />
// //         <Skills />
// //         <Services />
// //         <Qualification />
// //         <Work />
// //         <Testimonials />
// //         <Contact />
// //       </main>
// //       <Footer />
// //       <ScrollUp />
// //     </>
// //   );
// // };
// //
// // export default App;
//
// import React, { Suspense, useEffect, useState } from 'react';
// import './App.css';
// import { useData } from './apidata';
// import Footer from './components/footer/Footer';
// import ScrollUp from './components/scrollup/ScrollUp';
// import NavbarComponent from './components/header/Header';
// import LoadingAnimation from './components/LoadingAnimation';
// import './components/LoadingAnimation.css';
//
// // Lazy load components
// const Home = React.lazy(() => import('./components/home/Home'));
// const About = React.lazy(() => import('./components/about/About'));
// const Skills = React.lazy(() => import('./components/skills/Skills'));
// const Services = React.lazy(() => import('./components/services/Services'));
// const Qualification = React.lazy(() => import('./components/qualification/Qualification'));
// const Work = React.lazy(() => import('./components/Portfolio/Work'));
// const Testimonials = React.lazy(() => import('./components/testimonials/Testimonials'));
// const Contact = React.lazy(() => import('./components/contact/Contact'));
//
// const App = () => {
//   const { loading } = useData();
//
//   // Preload components in the background
//   useEffect(() => {
//     // Import all components to start preloading them
//     const componentsToPreload = [
//       import('./components/home/Home'),
//       import('./components/about/About'),
//       import('./components/skills/Skills'),
//       import('./components/services/Services'),
//       import('./components/qualification/Qualification'),
//       import('./components/Portfolio/Work'),
//       import('./components/testimonials/Testimonials'),
//       import('./components/contact/Contact'),
//     ];
//
//     // Use Promise.all to preload in parallel
//     Promise.all(componentsToPreload);
//   }, []);
//
//   if (loading) {
//     return <LoadingAnimation />;
//   }
//
//   return (
//     <>
//       <NavbarComponent />
//       <main className="main">
//         <Suspense fallback={<LoadingAnimation />}> {/* Loading state for lazy components */}
//           <Home />
//           <About />
//           <Skills />
//           <Services />
//           <Qualification />
//           <Work />
//           <Testimonials />
//           <Contact />
//         </Suspense>
//       </main>
//       <Footer />
//       <ScrollUp />
//     </>
//   );
// };
//
// export default App;

import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { useData } from './apidata'; // Adjust the path if necessary
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import NavbarComponent from './components/header/Header';
import LoadingAnimation from './components/LoadingAnimation';
import './components/LoadingAnimation.css';

// Lazy load the components
const Home = React.lazy(() => import('./components/home/Home'));
const About = React.lazy(() => import('./components/about/About'));
const Skills = React.lazy(() => import('./components/skills/Skills'));
const Services = React.lazy(() => import('./components/services/Services'));
const Qualification = React.lazy(() => import('./components/qualification/Qualification'));
const Work = React.lazy(() => import('./components/Portfolio/Work'));
const Testimonials = React.lazy(() => import('./components/testimonials/Testimonials'));
const Contact = React.lazy(() => import('./components/contact/Contact'));

const App = () => {
  const { loading, data, error } = useData();
  const [isHomeDataLoaded, setIsHomeDataLoaded] = useState(false);

  useEffect(() => {
    // Preload all components in the background for faster subsequent navigation
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

  useEffect(() => {
    // Check if data is loaded AND there are no errors
    if (data && data.home && !error) {
      setIsHomeDataLoaded(true);
    }
  }, [data, error]);

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
          {isHomeDataLoaded && <Home />} {/* Conditionally render Home */}
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