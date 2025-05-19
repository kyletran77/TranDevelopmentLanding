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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 0;
  }
`;

export const ResourcesContainer = styled.div`
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  
  .swiper {
    padding-bottom: 3rem;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.teritory};
    opacity: 0.5;
    
    &-active {
      opacity: 1;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.teritory};
    
    &:after {
      font-size: 1.5rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      &:after {
        font-size: 1.2rem;
      }
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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