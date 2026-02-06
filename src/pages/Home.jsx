import React from 'react';
import Header from '../components/Header';
import Hero from '../components/SobreMim';
import Methodologies from '../components/Methodologies';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import SoftSkills from '../components/SoftSkills';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Modals from '../components/Modals';
import SobreMim from '../components/SobreMim';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SobreMim />
        <Methodologies />
        <Certificates />
        <Services />
        <SoftSkills />
        <TechStack />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
      <Modals />
    </>
  );
};

export default Home;