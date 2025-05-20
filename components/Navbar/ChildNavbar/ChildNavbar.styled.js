import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Nav = styled.nav`
background:${({scrollNav}) =>(scrollNav ? '#fff' :'#fff')};
width: 95%;
max-width: 1600px;
border-radius: 10px;
  height: 66px;
  /* margin-top:-80px; */
  display:flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  /*padding: 0.5rem calc((100vw - 1000px) / 2);*/
  top: 0;
  right:0;
  left:0;
  z-index: 10;
  /* overflow: visible; */
  @media screen and(max-width:960px) {
    transition: all 0.8s ease-in-out;
  }
`;
export const NavContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;

export const Logo = styled(motion.img)`
  width: 180px;
  height: auto;
  max-height:100%;
  object-position:center;
  object-fit: contain;
  cursor: pointer;
`;

export const LogoText = styled.p`
 font-size:24px;
 font-weight:600;
`
export const NavMenu = styled(motion.ul)`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled(motion.li)`
  list-style: none;
  margin-right: 24px;
`;

export const NavLink = styled(Link)`
  color: #0D0A19;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  padding: 0 1rem;
  cursor: pointer;
  
  &[href="/verilog"] {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 3px;
      background: linear-gradient(90deg, #4a6cf7 0%, #6a89ff 100%);
      border-radius: 2px;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 85%;
    }
  }
`;
export const NavLinkA = styled(motion.a)`
  color: #0D0A19;
  cursor: pointer;
  
  ${({ href }) => href === '/verilog' && `
    font-weight: 600;
    background: linear-gradient(90deg, #343a40 0%, #4a6cf7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  `}
`;

export const MobileMenu = styled(motion.div)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;
  }
`;

export const MenuIcon = styled(HiOutlineMenuAlt4)`
  color: #0D0A19;
  font-size: 1.8rem;
`;
