import React,{ useState, useEffect } from "react";
import Links from "../../../data/menuLinks";
import LogoImage from "/public/images/TranDevPRKit/full_tdev_logo.svg";
import {
  Logo,
  LogoText,
  MenuIcon,
  MobileMenu,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkA,
  NavMenu,
} from "./ChildNavbar.styled";
import Link from "next/link";
import { useRouter } from 'next/router';


const ChildNavbar = ({ toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const router = useRouter();

  const LogoValue = "logo";


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    
    <Nav  scrollNav={scrollNav} >
      <NavContainer>
        <NavLink href="/">
         <NavLinkA aria-label="Tran Development Home">{LogoValue === "text" ? <Link href="/"><LogoText>Tran Development</LogoText></Link> :<Logo src={LogoImage.src} alt="Tran Development logo" />}</NavLinkA>
        </NavLink>
        <MobileMenu onClick={toggle}>
          <MenuIcon />
        </MobileMenu>
        <NavMenu>
          {Links.map((link) => {
            let Href = link.to;
            if (link.to.startsWith('#') && router.pathname !== '/') {
              Href = `/${link.to}`;
            }
            return (
              <NavItem key={link.id}>
                <NavLink href={Href}> 
                  <NavLinkA href={Href} role="button"> {link.name}</NavLinkA>
                </NavLink>
              </NavItem>
            );
          })}
        </NavMenu>
      </NavContainer>
    </Nav>
    
  );
};

export default ChildNavbar;
