import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { theme } from '../components/Theme';

// Styled components for the tools page
const ToolsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ToolsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 120px;
`;

const ToolsTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primaryText};
  margin-bottom: 1rem;
`;

const ToolsDescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.secondaryText};
  max-width: 800px;
  margin: 0 auto;
`;

const CategorySection = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primaryText};
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${theme.colors.accentColor};
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ToolCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ToolLogo = styled.div`
  height: 100px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 80px;
    object-fit: contain;
  }
`;

const ToolContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ToolName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primaryText};
`;

const ToolDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.secondaryText};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const ToolLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${theme.colors.primaryColor};
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.accentColor};
  }
`;

const ComingSoonMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: ${theme.colors.lightBackground};
  border-radius: 8px;
  margin: 2rem 0;
`;

const ComingSoonText = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primaryText};
  margin-bottom: 1rem;
`;

const ComingSoonDescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.secondaryText};
  max-width: 600px;
  margin: 0 auto;
`;

// Sample tools data (placeholder)
const toolsData = {
  'AI & Machine Learning': [
    {
      id: 1,
      name: 'TensorFlow',
      description: 'Open-source platform for machine learning and artificial intelligence.',
      logo: 'https://www.tensorflow.org/images/tf_logo_horizontal.png',
      link: 'https://www.tensorflow.org/'
    },
    {
      id: 2,
      name: 'PyTorch',
      description: 'Open source machine learning framework for research and production.',
      logo: 'https://pytorch.org/assets/images/pytorch-logo.png',
      link: 'https://pytorch.org/'
    },
    {
      id: 3,
      name: 'OpenAI API',
      description: 'Powerful AI models for natural language, code, images, and more.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png',
      link: 'https://openai.com/api/'
    }
  ],
  'Data Processing & Analytics': [
    {
      id: 4,
      name: 'Apache Spark',
      description: 'Unified analytics engine for large-scale data processing.',
      logo: 'https://spark.apache.org/images/spark-logo-trademark.png',
      link: 'https://spark.apache.org/'
    },
    {
      id: 5,
      name: 'Pandas',
      description: 'Fast, powerful, flexible and easy to use open source data analysis and manipulation tool.',
      logo: 'https://pandas.pydata.org/static/img/pandas_mark.svg',
      link: 'https://pandas.pydata.org/'
    }
  ],
  'Development & Deployment': [
    {
      id: 6,
      name: 'Next.js',
      description: 'React framework for production: hybrid static & server rendering, smart bundling, and more.',
      logo: 'https://nextjs.org/static/favicon/favicon-32x32.png',
      link: 'https://nextjs.org/'
    },
    {
      id: 7,
      name: 'Docker',
      description: 'Platform for developing, shipping, and running applications in containers.',
      logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
      link: 'https://www.docker.com/'
    },
    {
      id: 8,
      name: 'AWS',
      description: 'Comprehensive cloud computing platform for building and deploying applications.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
      link: 'https://aws.amazon.com/'
    }
  ]
};

const Tools = () => {
  return (
    <>
      <Head>
        <title>Our Tech Stack | Tran Development | AI & Data Solutions</title>
        <meta 
          name="description" 
          content="Explore the tools and technologies we use and recommend for AI development, data analysis, and project management." 
        />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Navbar />
      
      <ToolsContainer>
        <ToolsHeader>
          <ToolsTitle>Our Tech Stack</ToolsTitle>
          <ToolsDescription>
            A curated list of tools and technologies we use and recommend for AI development, data analysis, and project management.
          </ToolsDescription>
        </ToolsHeader>
        
        <ComingSoonMessage>
          <ComingSoonText>Tools Directory Coming Soon!</ComingSoonText>
          <ComingSoonDescription>
            We're curating a comprehensive directory of the tools and technologies we use. Check back soon for our recommendations.
          </ComingSoonDescription>
        </ComingSoonMessage>
        
        {Object.entries(toolsData).map(([category, tools]) => (
          <CategorySection key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <ToolsGrid>
              {tools.map(tool => (
                <ToolCard key={tool.id}>
                  <ToolLogo>
                    <img src={tool.logo} alt={`${tool.name} logo`} />
                  </ToolLogo>
                  <ToolContent>
                    <ToolName>{tool.name}</ToolName>
                    <ToolDescription>{tool.description}</ToolDescription>
                    <ToolLink href={tool.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </ToolLink>
                  </ToolContent>
                </ToolCard>
              ))}
            </ToolsGrid>
          </CategorySection>
        ))}
      </ToolsContainer>
      
      <Footer />
    </>
  );
};

export default Tools; 