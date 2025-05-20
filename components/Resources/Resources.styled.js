import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeadingH3, Paragraph, flexColumnCenter } from '../cssHelper';
import { theme } from '../Theme';

export const ResourcesSection = styled.section`
  width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-column: 1fr;
  max-width: 100%;
  background-color: #ffffff;
  padding: 4rem 0;
  overflow-x: hidden; /* Ensure no horizontal scrollbar appears */
  margin-left: 0;
  margin-right: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 0;
  }
`;

export const ResourcesContainer = styled.div`
  width: 95%;
  max-width: 2200px; /* Increased for wider screens */
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  
  /* Heading section gets contained */
  & > div:first-child {
    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 95%;
  }
`;

export const ResourcesHeading = styled.h2`
  ${HeadingH3};
  font-family: "Grifter-bold", sans-serif;
  font-weight: 800;
  font-size: 2.8rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

export const ResourcesDescription = styled.p`
  ${Paragraph};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  padding: 0;
  position: relative;
  
  /* Place headings in a contained area */
  h3 {
    width: 90%;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .carousel-root {
    width: 100%;
    max-width: 100vw;
    overflow: visible;
  }
  
  .carousel {
    width: 100%;
    overflow: visible;
  }
  
  .carousel-slide {
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  .carousel .control-arrow {
    opacity: 1;
    background: rgba(0, 0, 0, 0.05);
    height: 60px;
    width: 40px;
    top: calc(50% - 30px);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    
    &.control-prev {
      border-radius: 0 5px 5px 0;
      left: -10px;
    }
    
    &.control-next {
      border-radius: 5px 0 0 5px;
      right: -10px;
    }
  }
  
  .carousel .control-dots {
    margin: 15px 0 0;
    
    .dot {
      background: ${({ theme }) => theme.colors.teritory};
      opacity: 0.5;
      width: 10px;
      height: 10px;
      box-shadow: none;
      
      &.selected {
        opacity: 1;
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .carousel .control-arrow {
      height: 40px;
      width: 30px;
      top: calc(50% - 20px);
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .carousel .control-arrow {
      height: 30px;
      width: 25px;
      top: calc(50% - 15px);
    }
  }
`;

export const CarouselHeading = styled.h3`
  font-family: "Grifter-bold", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const EventCard = styled.div`
  ${flexColumnCenter};
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  height: 100%;
  min-height: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto;
  width: 85%; /* Make cards narrower to fit better */
  
  h3 {
    font-family: "Grifter-bold", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.teritory};
    margin-bottom: 0.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
    padding: 1.25rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    padding: 1rem;
  }
`;

export const EventDate = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.25rem;
`;

export const EventLocation = styled.span`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const EventDescription = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

export const EventLink = styled.a`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.teritory};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryBackground};
  }
`;

export const AIToolCard = styled.div`
  ${flexColumnCenter};
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  height: 100%;
  min-height: 380px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto;
  width: 85%; /* Make cards narrower to fit better */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
    padding: 1.25rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    padding: 1rem;
  }
`;

export const AIToolLogo = styled.img`
  height: 40px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

export const AIToolName = styled.h3`
  font-family: "Grifter-bold", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.teritory};
  margin-bottom: 1rem;
`;

export const AIToolCaseHeading = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`;

export const AIToolUseCase = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 1rem;
`;

export const AIToolLink = styled.a`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.teritory};
  text-decoration: none;
  margin-top: auto;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryBackground};
  }
`; 