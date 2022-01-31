import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeToggle from "react-dark-mode-toggle";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from "./components/TestimonialsCarousel";
import Contacts from './components/Contacts';
import Footer from './components/Footer';




function App() {
//  const particlesInit = (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   };

//   const particlesLoaded = (container) => {
//     console.log(container);
//   }
  return (
    <>
   
    <Navbar />
    <Header />
   
    <AboutMe />
    <Services />
    <Experience />
    <Portfolio />
    <Testimonials />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;
