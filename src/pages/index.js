import React from 'react';

import Header from '../components/Home/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';

const HomePage = () => {
  return (
    <>
      <Header />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
