import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  const eventsNavigationPrevRef = useRef(null);
  const eventsNavigationNextRef = useRef(null);
  const toolsNavigationPrevRef = useRef(null);
  const toolsNavigationNextRef = useRef(null);

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
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: eventsNavigationPrevRef.current,
              nextEl: eventsNavigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = eventsNavigationPrevRef.current;
              swiper.params.navigation.nextEl = eventsNavigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            a11y={{
              prevSlideMessage: 'Previous event',
              nextSlideMessage: 'Next event',
              firstSlideMessage: 'This is the first event',
              lastSlideMessage: 'This is the last event',
            }}
          >
            {educationEvents.map((event, index) => (
              <SwiperSlide key={`event-${index}`}>
                <EventCard>
                  <h3>{event.title}</h3>
                  <EventDate>{event.date}</EventDate>
                  <EventLocation>{event.location}</EventLocation>
                  <EventDescription>{event.description}</EventDescription>
                  <EventLink href={event.url} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </EventLink>
                </EventCard>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev" ref={eventsNavigationPrevRef} aria-label="Previous events"></div>
            <div className="swiper-button-next" ref={eventsNavigationNextRef} aria-label="Next events"></div>
          </Swiper>
        </CarouselContainer>

        <CarouselContainer>
          <CarouselHeading>AI Tools We Leverage</CarouselHeading>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: toolsNavigationPrevRef.current,
              nextEl: toolsNavigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = toolsNavigationPrevRef.current;
              swiper.params.navigation.nextEl = toolsNavigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            a11y={{
              prevSlideMessage: 'Previous AI tool',
              nextSlideMessage: 'Next AI tool',
              firstSlideMessage: 'This is the first AI tool',
              lastSlideMessage: 'This is the last AI tool',
            }}
          >
            {aiTools.map((tool, index) => (
              <SwiperSlide key={`tool-${index}`}>
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
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev" ref={toolsNavigationPrevRef} aria-label="Previous AI tools"></div>
            <div className="swiper-button-next" ref={toolsNavigationNextRef} aria-label="Next AI tools"></div>
          </Swiper>
        </CarouselContainer>
      </ResourcesContainer>
    </ResourcesSection>
  );
};

export default Resources; 