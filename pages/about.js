import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Head from 'next/head';
import TeamMember from '../components/AboutUs/TeamMember.js';

// Keyframes for blob animation
const blobAnimation = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff2f2; /* Light pinkish background */
  position: relative;
  overflow: hidden; /* Contain blobs */
`;

const AnimatedBlob = styled.div`
  position: absolute;
  opacity: 0.15;
  animation: ${blobAnimation} 15s ease-in-out infinite alternate;
  pointer-events: none;
  
  &.blob1 {
    width: 400px;
    height: 350px;
    background: linear-gradient(135deg, #ff8a00, #e52e71);
    top: 5%;
    left: -10%;
    animation-duration: 18s;
  }
  
  &.blob2 {
    width: 300px;
    height: 250px;
    background: linear-gradient(135deg, #2956e5, #5928e5);
    bottom: 10%;
    right: -5%;
    animation-duration: 22s;
    animation-direction: alternate-reverse;
  }
   &.blob3 {
    width: 200px;
    height: 180px;
    background: linear-gradient(135deg, #34e89e, #036ed9);
    top: 40%;
    right: 15%;
    animation-duration: 20s;
  }
`;

const MainContent = styled(motion.main)`
  padding: 8rem 0 4rem;
  position: relative; /* Ensure content is above blobs */
  z-index: 1;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #5928e5;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const TeamGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem; /* Increased gap */
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Kyle Tran',
      title: 'Tech Lead',
      image: '/images/TranDevPRKit/color_tdev_logo.svg', 
      bio: "I'm Kyle Tran, Tech Lead at Tran Development. I architect scalable AI and data systems, turning research into production-ready software.",
      linkedin: 'https://www.linkedin.com/in/kyle-tran-3395b2161/',
      email: 'kyle@tran.dev',
      skills: ['Scalable Architecture', 'RAG Systems', 'Firebase Integration'],
      tools: ['React', 'Firebase', 'Vertex AI', 'AWS', 'Cursor AI'],
      ctaText: 'View Projects →',
      ctaLink: 'https://www.linkedin.com/in/kyle-tran-3395b2161/',
      animationDirection: 'left' // Custom prop for animation
    },
    {
      name: 'Kyle T. "KT" Tran',
      title: 'Business Development Lead',
      image: '/images/TranDevPRKit/color_tdev_logo.svg',
      bio: "KT leads our growth strategy—CRM×AI specialist. Let's talk about how you aren't using AI.",
      linkedin: 'https://www.linkedin.com/in/kyletran01/',
      email: 'kt@tran.dev',
      skills: ['AI-Driven Sales', 'CRM Management', 'B2B Frameworks'],
      tools: ['Apollo.io', 'HubSpot', 'LinkedIn Sales Navigator'],
      ctaText: "Let's Chat →",
      ctaLink: 'https://kylettran.com',
      animationDirection: 'right' // Custom prop for animation
    },
    {
      name: 'David Applegate',
      title: 'Advisor & Serial Entrepreneur',
      image: '/images/TranDevPRKit/color_tdev_logo.svg',
      bio: "David is CEO of Wrestling Mart and ImportYeti, and a serial entrepreneur advising on growth and operations.",
      linkedin: 'https://www.linkedin.com/in/davemapplegate/',
      email: 'david@tran.dev',
      skills: ['Entrepreneurship', 'Go-to-Market Strategy', 'Scaling Startups'],
      tools: ['Salesforce', 'Tableau'],
      ctaText: 'Connect →',
      ctaLink: 'https://www.linkedin.com/in/davemapplegate/',
      animationDirection: 'left' // Custom prop for animation
    },
    {
      name: 'Trinh Tran',
      title: 'Tech Advisor',
      image: '/images/TranDevPRKit/color_tdev_logo.svg',
      bio: "Trinh is our cloud & AI advisor at Broadcom, specializing in large-scale distributed systems and AI infrastructure.",
      linkedin: 'https://www.linkedin.com/in/trinh-tran-6592734/',
      email: 'trinh@tran.dev',
      skills: ['Cloud Architecture', 'AI Infrastructure', 'DevOps Automation'],
      tools: ['AWS', 'Kubernetes', 'Terraform'],
      ctaText: 'Learn More →',
      ctaLink: 'https://www.linkedin.com/in/trinh-tran-6592734/',
      animationDirection: 'right' // Custom prop for animation
    }
  ];

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    }
  };

  // TeamGrid will use its own staggerChildren for the cards
  const gridVariants = {
    hidden: { opacity: 0 }, // Can be simple if cards handle their own complex animation
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 } // Stagger the appearance of each card
    }
  }

  return (
    <PageContainer>
      <Head>
        <title>Meet Our Team | Tran Development</title>
        <meta name="description" content="Meet the core team and advisors behind Tran Development. We're passionate about turning innovative ideas into scalable AI solutions." />
        {/* Open Graph Tags for About Page */}
        <meta property="og:url" content="https://trandev.netlify.app/about" />
        <meta property="og:title" content="Meet Our Team | Tran Development" />
        <meta property="og:description" content="Meet the core team and advisors behind Tran Development. We're passionate about turning innovative ideas into scalable AI solutions." />
        {/* og:image will use the default from _document.js unless overridden here */}
      </Head>

      <AnimatedBlob className="blob1" />
      <AnimatedBlob className="blob2" />
      <AnimatedBlob className="blob3" />

      <MainContent
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <Container>
          <PageTitle variants={titleVariants}>
            Meet Our Crew
          </PageTitle>
          
          <PageSubtitle variants={subtitleVariants}>
            We are a collective of innovators, strategists, and tech enthusiasts dedicated to crafting exceptional AI-powered solutions. Get to know the minds driving Tran Development forward.
          </PageSubtitle>
          
          <TeamGrid variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {teamMembers.map((member, index) => (
              // The motion.div wrapper for each card is removed here,
              // as the TeamMember component itself is now a motion component
              // and will use its own variants passed through props.
              <TeamMember
                key={index}
                {...member} // Spread all member props, including animationDirection
              />
            ))}
          </TeamGrid>
        </Container>
      </MainContent>
    </PageContainer>
  );
};

export default AboutPage; 