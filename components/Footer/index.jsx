import Link from 'next/link';
import{Container,FooterTitles, Section} from './Footer.styled'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
    return (
      <Section>
      <Container>
        <FooterTitles>&copy; {year} Tran Development. All Rights Reserved</FooterTitles>
        <FooterTitles>Boutique AI & Data Solutions Agency</FooterTitles>
        <Link href="mailto:kyletran@trandev.net"><FooterTitles>kyletran@trandev.net</FooterTitles></Link>
        <Link href="tel:+14085477240"><FooterTitles>(408) 547-7240</FooterTitles></Link>
        <Link href="https://www.linkedin.com/company/tran-development" target="_blank" rel="noopener noreferrer">
          <FooterTitles>LinkedIn</FooterTitles>
        </Link>
      </Container>
      </Section>
    )
  }
  
  export default Footer
