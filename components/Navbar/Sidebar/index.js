import Links from '../../../data/menuLinks';
import Link from 'next/link';
import {LogoText , CloseIcon, IconContainer, LogoContainer, SidebarContainer, SidebarMenu, SidebarMenuLink, SidebarMenuLinkA, SidebarMenuWrapper } from './Sidebar.styled'
import { useRouter } from 'next/router';

const Sidebar = ({ isOpen,toggle}) => {
  const router = useRouter();

  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      {/* <LogoContainer>
        <Link href="/" passHref><a><LogoText>Tran Development</LogoText></a></Link>
      </LogoContainer> */}
        <IconContainer onClick={toggle}>
            <CloseIcon/>
        </IconContainer>
        <SidebarMenuWrapper>
        {Links.map((link) => {
          let Href = link.to;
          if (link.to.startsWith('#') && router.pathname !== '/') {
            Href = `/${link.to}`;
          }

          return (
            <SidebarMenu key={link.id} onClick={toggle}>
              <li>
                <SidebarMenuLink  href={Href} >
                  <SidebarMenuLinkA role="button"> {link.name}</SidebarMenuLinkA>
                </SidebarMenuLink>
              </li>
            </SidebarMenu>
          );
        })}
        </SidebarMenuWrapper>
    </SidebarContainer>
   
  )
}

export default Sidebar