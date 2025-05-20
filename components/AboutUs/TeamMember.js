import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  overflow: hidden; /* To contain any overflowing animated elements */
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: #5928e5;
`;

const MemberTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: #555;
`;

const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
  flex-grow: 1;
`;

const SectionTitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 0.5rem 0;
  color: #555;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const Skill = styled.li`
  background-color: #f4f0ff;
  border-radius: 20px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  color: #5928e5;
`;

const ToolsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const Tool = styled.li`
  background-color: #f0f5ff;
  border-radius: 20px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  color: #2956e5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: #5928e5;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: #5928e5;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s ease-out;
  text-align: center;
  margin-top: auto; /* Pushes button to the bottom */
  
  &:hover {
    background-color: #4920c5;
    transform: scale(1.05);
  }
`;

const TeamMember = (props) => {
  const { 
    name, 
    title, 
    image, 
    bio, 
    linkedin, 
    email, 
    skills, 
    tools, 
    ctaText, 
    ctaLink,
    animationDirection // New prop for varied animations
  } = props;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: animationDirection === 'left' ? -100 : animationDirection === 'right' ? 100 : 0,
      y: animationDirection === 'up' ? 100 : animationDirection === 'down' ? -100 : 0,
      rotate: animationDirection === 'left' ? -5 : animationDirection === 'right' ? 5 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };
  
  return (
    <Card
      variants={cardVariants}
      // initial="hidden" // Handled by parent motion.div in about.js
      // whileInView="visible" // Handled by parent motion.div in about.js
      // viewport={{ once: true }} // Handled by parent motion.div in about.js
    >
      <ProfileImage>
        <img src={image} alt={`${name} portrait`} />
      </ProfileImage>
      
      <MemberName>{name}</MemberName>
      <MemberTitle>{title}</MemberTitle>
      
      <SocialLinks>
        <SocialLink href={linkedin} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
          LinkedIn
        </SocialLink>
        <SocialLink href={`mailto:${email}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          Email
        </SocialLink>
      </SocialLinks>
      
      <Bio>{bio}</Bio>
      
      <SectionTitle>Key Skills</SectionTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </SkillsList>
      
      <SectionTitle>Tools</SectionTitle>
      <ToolsList>
        {tools.map((tool, index) => (
          <Tool key={index}>{tool}</Tool>
        ))}
      </ToolsList>
      
      <CtaButton href={ctaLink} target="_blank" rel="noopener noreferrer">
        {ctaText}
      </CtaButton>
    </Card>
  );
};

export default TeamMember; 