import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { theme } from '../components/Theme';

// Styled components for the blog page
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 120px;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primaryText};
  margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.secondaryText};
  max-width: 800px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogCardImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const BlogCardContent = styled.div`
  padding: 1.5rem;
`;

const BlogCardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primaryText};
`;

const BlogCardExcerpt = styled.p`
  font-size: 1rem;
  color: ${theme.colors.secondaryText};
  margin-bottom: 1rem;
`;

const BlogCardDate = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.accentText};
`;

const BlogCardLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: ${theme.colors.primaryColor};
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
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

// Sample blog posts (placeholder data)
const blogPosts = [
  {
    id: 1,
    title: 'Transforming Academic Research with AI',
    excerpt: 'How AI is revolutionizing the way academic research is conducted and commercialized.',
    date: 'June 15, 2024',
    image: '/images/MOCKUPS/about.jpeg',
    slug: 'transforming-academic-research-with-ai'
  },
  {
    id: 2,
    title: 'The Future of EdTech: AI-Driven Learning Experiences',
    excerpt: 'Exploring how AI is creating personalized and effective learning environments.',
    date: 'June 10, 2024',
    image: '/images/MOCKUPS/banner.jpeg',
    slug: 'future-of-edtech-ai-driven-learning'
  },
  {
    id: 3,
    title: 'From MVP to Scale: A Success Story',
    excerpt: 'Case study of how we helped a research lab transform their idea into a marketable product.',
    date: 'June 5, 2024',
    image: '/images/MOCKUPS1/about.jpeg',
    slug: 'mvp-to-scale-success-story'
  }
];

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Tran Development | AI & Data Solutions</title>
        <meta 
          name="description" 
          content="Insights, case studies, and thought leadership on AI, data solutions, and technology from Tran Development." 
        />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Navbar />
      
      <BlogContainer>
        <BlogHeader>
          <BlogTitle>Tran Development Blog</BlogTitle>
          <BlogDescription>
            Insights, case studies, and thought leadership on AI, data solutions, and technology.
          </BlogDescription>
        </BlogHeader>
        
        <ComingSoonMessage>
          <ComingSoonText>Blog Coming Soon!</ComingSoonText>
          <ComingSoonDescription>
            We&apos;re working on bringing you valuable insights and content. Check back soon for updates or subscribe to our newsletter to be notified when new content is published.
          </ComingSoonDescription>
        </ComingSoonMessage>
        
        <BlogGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id}>
              <BlogCardImage image={post.image} />
              <BlogCardContent>
                <BlogCardDate>{post.date}</BlogCardDate>
                <BlogCardTitle>{post.title}</BlogCardTitle>
                <BlogCardExcerpt>{post.excerpt}</BlogCardExcerpt>
                <Link href={`/blog/${post.slug}`} passHref>
                  <BlogCardLink>Read More</BlogCardLink>
                </Link>
              </BlogCardContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogContainer>
      
      <Footer />
    </>
  );
};

export default Blog; 