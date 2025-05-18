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
        <Link href="mailto:kyle@trandevelopment.io"><FooterTitles>kyle@trandevelopment.io</FooterTitles></Link>
      </Container>
      </Section>
    )
  }
  
  export default Footer
