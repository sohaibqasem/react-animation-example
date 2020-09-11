import React, { Fragment } from 'react';


import NavBar from './components/NavBar/NavBar';

import Preview from './components/Sections/HeroSction/HeroSection';
import About from './components/Sections/AboutSection/AboutSection';
import Services from './components/Sections/ServicesSection/ServicesSection';

import Footer from './components/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  AOS.init();
  return (
    <Fragment>
      <NavBar/>
      <Preview/>
      <main id="main">
        <About/>
        <Services/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
