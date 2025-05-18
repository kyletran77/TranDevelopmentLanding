import Link from "next/link";
import { motion } from "framer-motion";
import {
  ServiceContent,
  ServicesText,
  ServiceNavImage,
  ServiceHeading,
  ServiceList,
  ServiceDetails,
  HorizontalLine,
  Span,
  ServiceTitle,
  ServiceLink,
  Service,
  ServiceIndex,
  ServiceDescription,
  Section,
  Container,
  ServiceLinkContainer,
  ServiceTextMainContainer,
  ArrowIcon,
  ServiceImage,
  WhatWeDo,
  ServiceHeader,
  ServiceHeadingDiv,
  ContactButton,
  ServiceNumber,
} from "./Services.styled";

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <ServiceHeader>
          <WhatWeDo>WHAT WE DO</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>Services We Offer</ServiceHeading>
            <Link href="#contact-us">
             <ContactButton>Contact Us</ContactButton>
            </Link>
          </ServiceHeadingDiv>
        </ServiceHeader>

        <ServiceContent>
          <ServiceList>

            <Service
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.4,delay:0.1}}
              viewport={{ once: true}}
            >
              <ServiceNumber className="service-number">01</ServiceNumber>
              <ServiceImage
                alt="AI Workflows Icon"
                src="/images/website development.svg">
              </ServiceImage>
              <ServiceTitle>
                AI Workflows
              </ServiceTitle>
              <ServiceDetails className="service-details">
                Expand your organization&apos;s capabilities by integrating AI directly into your workflows. We assist with AI for marketing automation, sales process optimization, code generation, and data analysis.
              </ServiceDetails>
            </Service>

            <Service
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.4,delay:0.2}}
              viewport={{ once: true}}
            >
              <ServiceNumber className="service-number">02</ServiceNumber>
              <ServiceImage
                alt="Discovery & Ideation Icon"
                src="/images/website development.svg">
              </ServiceImage>
              <ServiceTitle>
                Discovery &amp; Ideation
              </ServiceTitle>
              <ServiceDetails className="service-details">
                We kick off with a collaborative workshop to capture your vision, define user personas, map workflows, and craft a crisp problem statement. You walk away with a high-level journey map and the Section C narrative you need for your grant.
              </ServiceDetails>
            </Service>

            <Service
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.4,delay:0.3}}
              viewport={{ once: true}}
            >
              <ServiceNumber className="service-number">03</ServiceNumber>
              <ServiceImage
                alt="Prototype & Feasibility Icon"
                src="/images/app development.svg">
              </ServiceImage>
              <ServiceTitle>
                Prototype &amp; Feasibility
              </ServiceTitle>
              <ServiceDetails className="service-details">
                Next, we validate your idea with a lightweight clickable prototype and a &quot;drop-in&quot; feasibility memo. We audit your data, compare AI-stack options (Vertex AI, open-source embeddings), and produce an architecture diagram plus budget &amp; timeline estimates—perfect for reviewers.
              </ServiceDetails>
            </Service>

            <Service
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.4,delay:0.4}}
              viewport={{ once: true}}
            >
              <ServiceNumber className="service-number">04</ServiceNumber>
              <ServiceImage
                alt="MVP Development Icon"
                src="/images/digital marketing.svg">
              </ServiceImage>
              <ServiceTitle>
                MVP Development
              </ServiceTitle>
              <ServiceDetails className="service-details">
                Then we build your pilot-ready MVP: authentication, data pipeline, AI inference, and user interface. We handle CI/CD, basic monitoring, and bi-weekly stakeholder demos so you see progress every sprint.
              </ServiceDetails>
            </Service>

            <Service
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.4,delay:0.5}}
              viewport={{ once: true}}
            >
              <ServiceNumber className="service-number">05</ServiceNumber>
              <ServiceImage
                alt="Scale & Grow Icon"
                src="/images/digital marketing.svg">
              </ServiceImage>
              <ServiceTitle>
                Scale &amp; Grow
              </ServiceTitle>
              <ServiceDetails className="service-details">
                Finally, we turn your pilot into a polished product. We run feature sprints based on user feedback, optimize performance and security (FERPA/NIH/NSF compliance), and set up grant-reporting exports. Ongoing support, health checks, and quarterly roadmap updates ensure you&apos;re ready to expand to new cohorts and funders.
              </ServiceDetails>
            </Service>

          </ServiceList>

        </ServiceContent>

      </Container>
    </Section>
  );
};

export default Services;
