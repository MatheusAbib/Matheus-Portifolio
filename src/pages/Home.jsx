import React from 'react';
import Header from '../components/Header';
import Certificates from '../components/Certificates';
import SoftSkills from '../components/SoftSkills';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SobreMim from '../components/SobreMim';
import SobreMim02 from '../components/SobreMim02';
import Tragetoria from '../components/Tragetoria';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SobreMim />
        <SobreMim02 />
        <Tragetoria />
        <div id="skills">
          <TechStack />
          <SoftSkills />
        </div>
        <Certificates />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;