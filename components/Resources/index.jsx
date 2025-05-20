import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';
import { 
  ResourcesSection, 
  ResourcesContainer,
  ResourcesHeading, 
  ResourcesDescription,
  CarouselContainer,
  CarouselHeading,
  EventCard,
  EventDate,
  EventLocation,
  EventDescription,
  EventLink,
  AIToolCard,
  AIToolLogo,
  AIToolName,
  AIToolUseCase,
  AIToolCaseHeading,
  AIToolLink
} from './Resources.styled';

const educationEvents = [
  {
    title: 'EdTech World Forum',
    date: 'May 19, 2025',
    location: 'London, UK',
    description: 'Global EdTech trends and innovations. International gathering of EdTech pros.',
    url: '#'
  },
  {
    title: 'IDC Conference',
    date: 'June 23–26, 2025',
    location: 'Reykjavík, Iceland',
    description: 'Designing interactive tech for children. Premier child-centered design conference.',
    url: '#'
  },
  {
    title: 'Model Schools Conference',
    date: 'June 22–25, 2025',
    location: 'Washington, D.C.',
    description: 'Next-gen learning environments sessions. Renowned speakers.',
    url: '#'
  },
  {
    title: 'ISTELive',
    date: 'June 29–July 2, 2025',
    location: 'San Antonio, TX',
    description: 'EdTech innovation expo. Thousands of learning experiences.',
    url: '#'
  },
  {
    title: 'IT in Education',
    date: 'August 5, 2025',
    location: 'Vancouver, Canada',
    description: 'Latest EduTech research presentations. Academic conference.',
    url: '#'
  }
];

const aiTools = [
  {
    name: 'Fathom AI Notetaker',
    logo: '/images/ai-tools/fathom-logo.svg',
    ourUseCase: 'We run client calls through Fathom to auto-capture & timestamp key discussion points, then share clean summaries.',
    enterpriseUseCase: 'Ensure 100% of meeting insights and action items are logged, searchable, and shared across teams.',
    url: 'https://fathom.video/'
  },
  {
    name: 'Cursor AI',
    logo: '/images/ai-tools/cursor-logo.svg',
    ourUseCase: 'We use Cursor in VS Code to autocomplete complex boilerplate (e.g. testing suites, API clients) in seconds.',
    enterpriseUseCase: 'Accelerate feature delivery by letting Cursor generate code snippets, docs, and unit tests on demand.',
    url: 'https://cursor.com/'
  },
  {
    name: 'Clay',
    logo: '/images/ai-tools/clay-logo.svg',
    ourUseCase: 'We enrich and sync prospect data with Clay so our SDRs always have up-to-date contact profiles before outreach.',
    enterpriseUseCase: 'Automate CRM data collection, record updates, and segmentation—eliminating manual maintenance.',
    url: 'https://clay.com/'
  },
  {
    name: 'ChatGPT',
    logo: '/images/ai-tools/chatgpt-logo.svg',
    ourUseCase: 'We leverage ChatGPT to draft proposals, blog outlines, and prototype chatbot flows for client demos.',
    enterpriseUseCase: 'Power customer support agents, content pipelines, and internal knowledge bots via API.',
    url: 'https://chat.openai.com/'
  },
  {
    name: 'Claude',
    logo: '/images/ai-tools/claude-logo.svg',
    ourUseCase: 'We use Claude for deep summarization of research papers and large-scale text analysis with controlled privacy.',
    enterpriseUseCase: 'Analyze sensitive documents, generate reports, and extract insights in regulated industries.',
    url: 'https://www.anthropic.com/'
  },
  {
    name: 'Descript AI Script Editor',
    logo: '/images/ai-tools/descript-logo.svg',
    ourUseCase: 'We import video/audio drafts into Descript to edit by editing text—then publish polished explainers in minutes.',
    enterpriseUseCase: 'Streamline video creation for marketing and L&D by cutting & rearranging messaging and publishing training modules faster.',
    url: 'https://www.descript.com/'
  },
  {
    name: 'Colossyan AI Avatar',
    logo: '/images/ai-tools/colossyan-logo.svg',
    ourUseCase: 'We build interactive tutorial clips using Colossyan avatars—no camera, studio, or actor needed.',
    enterpriseUseCase: 'Scale e-learning and onboarding with on-brand AI presenters, localized by language and region.',
    url: 'https://www.colossyan.com/'
  }
];

const Resources = () => {
  return (
    <ResourcesSection id="resources-section">
      <ResourcesContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ResourcesHeading>Resources</ResourcesHeading>
          <ResourcesDescription>
            Explore upcoming educational events and discover AI tools we use to deliver better outcomes.
          </ResourcesDescription>
        </motion.div>

        <CarouselContainer>
          <CarouselHeading>Upcoming Education Events</CarouselHeading>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={30}
            selectedItem={0}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            renderArrowPrev={(clickHandler, hasPrev) => 
              hasPrev && (
                <button 
                  type="button" 
                  onClick={clickHandler} 
                  className="control-arrow control-prev"
                  aria-label="Previous slide"
                  style={{ 
                    position: 'absolute', 
                    zIndex: 10, 
                    left: '10px',
                    fontSize: '24px',
                    background: 'rgba(0,0,0,0.1)',
                    width: '40px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    borderRadius: '0 5px 5px 0',
                    cursor: 'pointer'
                  }}
                >
                  ‹
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext) => 
              hasNext && (
                <button 
                  type="button" 
                  onClick={clickHandler} 
                  className="control-arrow control-next"
                  aria-label="Next slide"
                  style={{ 
                    position: 'absolute', 
                    zIndex: 10, 
                    right: '10px',
                    fontSize: '24px',
                    background: 'rgba(0,0,0,0.1)',
                    width: '40px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    borderRadius: '5px 0 0 5px',
                    cursor: 'pointer'
                  }}
                >
                  ›
                </button>
              )
            }
            responsive={{
              0: {
                centerSlidePercentage: 85
              },
              640: {
                centerSlidePercentage: 45
              },
              1024: {
                centerSlidePercentage: 30
              }
            }}
          >
            {educationEvents.map((event, index) => (
              <div key={`event-${index}`} className="carousel-slide">
                <EventCard>
                  <h3>{event.title}</h3>
                  <EventDate>{event.date}</EventDate>
                  <EventLocation>{event.location}</EventLocation>
                  <EventDescription>{event.description}</EventDescription>
                  <EventLink href={event.url} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </EventLink>
                </EventCard>
              </div>
            ))}
          </Carousel>
        </CarouselContainer>

        <CarouselContainer>
          <CarouselHeading>AI Tools We Leverage</CarouselHeading>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2500}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            centerMode={true}
            centerSlidePercentage={30}
            selectedItem={0}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            direction="prev"
            renderArrowPrev={(clickHandler, hasPrev) => 
              hasPrev && (
                <button 
                  type="button" 
                  onClick={clickHandler} 
                  className="control-arrow control-prev"
                  aria-label="Previous slide"
                  style={{ 
                    position: 'absolute', 
                    zIndex: 10, 
                    left: '10px',
                    fontSize: '24px',
                    background: 'rgba(0,0,0,0.1)',
                    width: '40px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    borderRadius: '0 5px 5px 0',
                    cursor: 'pointer'
                  }}
                >
                  ‹
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext) => 
              hasNext && (
                <button 
                  type="button" 
                  onClick={clickHandler} 
                  className="control-arrow control-next"
                  aria-label="Next slide"
                  style={{ 
                    position: 'absolute', 
                    zIndex: 10, 
                    right: '10px',
                    fontSize: '24px',
                    background: 'rgba(0,0,0,0.1)',
                    width: '40px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    borderRadius: '5px 0 0 5px',
                    cursor: 'pointer'
                  }}
                >
                  ›
                </button>
              )
            }
            responsive={{
              0: {
                centerSlidePercentage: 85
              },
              640: {
                centerSlidePercentage: 45
              },
              1024: {
                centerSlidePercentage: 30
              }
            }}
          >
            {aiTools.map((tool, index) => (
              <div key={`tool-${index}`} className="carousel-slide">
                <AIToolCard>
                  <AIToolLogo src={tool.logo} alt={`${tool.name} logo`} />
                  <AIToolName>{tool.name}</AIToolName>
                  <AIToolCaseHeading>Our Use Case</AIToolCaseHeading>
                  <AIToolUseCase>{tool.ourUseCase}</AIToolUseCase>
                  <AIToolCaseHeading>Enterprise Use Case</AIToolCaseHeading>
                  <AIToolUseCase>{tool.enterpriseUseCase}</AIToolUseCase>
                  <AIToolLink href={tool.url} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </AIToolLink>
                </AIToolCard>
              </div>
            ))}
          </Carousel>
        </CarouselContainer>
      </ResourcesContainer>
    </ResourcesSection>
  );
};

export default Resources; 