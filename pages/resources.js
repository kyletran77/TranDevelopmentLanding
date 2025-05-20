import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ResourcesComponent from '../components/Resources'; // Renamed to avoid conflict

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff; // Changed from #f8f9fa to pure white
`;

const MainContent = styled(motion.main)`
  padding: 6rem 0 4rem; /* Adjusted padding */
  position: relative;
  z-index: 1;
  width: 100%;
`;

const Container = styled.div`
  width: 100%; // Changed from 90% to allow full width
  margin: 0 auto;
  
  // Apply specific width only to title and video section
  & > h1, & > section {
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  // Let the Resources component have more freedom
  & > div {
    width: 100%;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem; /* Slightly smaller for a dedicated page */
  font-weight: 700;
  color: #343a40;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

const VideoSection = styled.section`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const VideoPlayerWrapper = styled(motion.div)`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.07);
  overflow: hidden;
  padding: 1rem;

  iframe {
    width: 100%;
    height: auto;
    min-height: 250px; /* Ensure a decent height */
    border: none;
    border-radius: 8px;
  }
`;

const VideoTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
`;

const VideoDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

// Placeholder video data
const featuredVideos = [
  {
    id: 'vid1',
    title: 'Understanding RAG Systems in AI',
    description: 'A deep dive into Retrieval Augmented Generation and its applications.',
    embedUrl: 'https://www.youtube.com/embed/yyH1AvlItPg' // Example: What is RAG?
  },
  {
    id: 'vid2',
    title: 'Firebase Integration for Modern Web Apps',
    description: 'Learn how to seamlessly integrate Firebase into your React projects.',
    embedUrl: 'https://www.youtube.com/embed/TPXBeUwO-ds' // Example: Firebase Full Course
  },
  {
    id: 'vid3',
    title: 'Introduction to AWS Fargate for Serverless Containers',
    description: 'Explore the benefits of AWS Fargate for deploying containerized applications.',
    embedUrl: 'https://www.youtube.com/embed/Hkqvd9Q3ypE' // Example: What is AWS Fargate?
  }
];

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ResourcesPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Resources | Tran Development</title>
        <meta name="description" content="Explore valuable resources, AI tools, educational events, and video tutorials from Tran Development." />
      </Head>

      <MainContent
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <Container>
          <PageTitle variants={itemVariants}>Our Resources Hub</PageTitle>
          
          {/* Render the existing Resources component */}
          <motion.div variants={itemVariants}>
            <ResourcesComponent />
          </motion.div>

          {/* New Video Section */}
          <VideoSection>
            <motion.h2 
              style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', color: '#343a40', marginBottom: '0.5rem'}}
              variants={itemVariants}
            >
              Featured Videos
            </motion.h2>
            <motion.p 
              style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto'}}
              variants={itemVariants}
            >
              Watch our latest tutorials, insights, and discussions on AI and development.
            </motion.p>

            <VideoGrid>
              {featuredVideos.map(video => (
                <VideoPlayerWrapper 
                  key={video.id} 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <iframe 
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <VideoTitle>{video.title}</VideoTitle>
                  <VideoDescription>{video.description}</VideoDescription>
                </VideoPlayerWrapper>
              ))}
            </VideoGrid>
          </VideoSection>
        </Container>
      </MainContent>
    </PageContainer>
  );
};

export default ResourcesPage; 