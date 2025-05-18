import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer,
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from 'next/link'

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

          <AboutBelow>
            <AboutImageDiv
            >
              <AboutImage src="/images/about.jpeg" alt="Team working on AI development"/>
            </AboutImageDiv>
            <AboutContent>
              <AboutTitle>About Us</AboutTitle>
              <AboutDescription>
              Tran Development is a boutique software agency specializing in end-to-end AI and data solutions that transform academic research into scalable products. With deep expertise in EdTech, AI-driven analytics, and enterprise integrations, we guide clients through a full-cycle development process—from Discovery &amp; Ideation to Scale &amp; Grow. 
              
              Recently, we&apos;ve expanded our offering to help organizations integrate AI directly into their workflows, leveraging AI for product development, marketing automation, sales processes, and code optimization.
              </AboutDescription>
              <Link href="#contact-us">
                <AboutButton>Schedule a Discovery Call</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;
