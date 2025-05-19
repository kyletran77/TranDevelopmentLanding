import styled from 'styled-components';
import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import OurWorks from "../../components/OurWorks";
import Resources from "../../components/Resources";
import TestimonialComponent from "../../components/Testimonials";
import Newsletter from "../../components/ContactUs";
import FAQ from "../../components/FAQ";
import LoadingScreen from "../../components/LoadingScreen";
import { BsEnvelope } from 'react-icons/bs';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const scrollRef = useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const FloatingButton = styled(motion.div)`
    position: fixed;
    bottom: 40px;
    left: 40px;
    background-color: #00ffb0; /* Updated to Tran Development mint green */
    color: #02022b; /* Dark blue text for better contrast */
    padding: 11px 16px;
    border-radius: 50%;
    display: grid;
    place-items:center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  const FloatingButtonIcon = styled.span`
    font-size: 30px;
  `;

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div>
            <HeroSection />
            <AboutUs ref={scrollRef} />
            <Services />
            <OurWorks />
            <Resources />
            <TestimonialComponent />
            <Newsletter />
            <FAQ />
          </div>
          <a target='_blank' href="mailto:kyle@trandevelopment.io" aria-label="Contact us via email">
            <FloatingButton 
              initial={{ opacity: 0 , y:25}}
              whileInView={{ opacity: 1, y:0 }}
            > 
              <FloatingButtonIcon><BsEnvelope></BsEnvelope></FloatingButtonIcon>
            </FloatingButton>
          </a>
        </>
      )}
    </div>
  );
};

export default HomePage;