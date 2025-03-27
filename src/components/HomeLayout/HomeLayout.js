import React from 'react';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About id="about"/>
    </>
  );
};

export default HomeLayout;