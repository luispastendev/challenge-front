import React from 'react'
import Contact from '../../components/home/contact';
import Features from '../../components/home/features';
import Footer from '../../components/home/footer';
import Hero from '../../components/home/hero';
import Navbar from '../../components/home/navbar';
import Services from '../../components/home/services';
import Team from '../../components/home/team';
import Us from '../../components/home/us';
import { Element } from 'react-scroll'


const Home = () => {
  return (<>
    <Navbar />
    <Element name="home">
      <Hero />
    </Element>
    <Element name="us">
      <Us />
    </Element>
    <Element name="services">
      <Services />
    </Element>
    <Element name="features">
      <Features />
    </Element>
    <Element name="team">
      <Team />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
    <Footer />
  </>);
}

export default Home