import React, {useState, useEffect} from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import LottieLogo from "./LottieLogo";
import { ZStacks, Values, Colors } from "./Variables";
import SocialLinks from "./SocialLinks";
import ProjectLinkComponent from './ProjectLink'

const NavigationMain = styled.nav`
  width: 100%;
  position: fixed !important;
  z-index: ${ZStacks.Navigation};
  display: grid;
  place-items: center;
  border-bottom: 0.2px solid ${({ theme }) => theme.divider};
  box-shadow: -10px 4px 44px -28px ${({ theme }) => theme.shadow};
  background-color: ${props => props.opacity};
`;

const NavigationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  max-width: ${Values.NavbarWidth};
  height: ${Values.NavbarHeight};
  padding: 0 1.5rem 0 1.5rem;
  align-items: center;
`;

const NavigationLogo = styled.div`
  width: auto;
  display: flex;
  transition: 0.50s linear;
`;

const NavigationWebMenu = styled.div`
  display: none;
  align-items: center;
  @media only screen and (min-width: ${Values.MobileResponsive}) {
    display: flex;
  }
`;

const NavWebLinks = styled(Link)`
  cursor: pointer;
  margin-left: 1.5rem;
  text-decoration:none;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
  &.active {
    color: ${({ theme }) => theme.highlightColor};
    font-weight: 700;
  }
`;

const ProjectLink = styled(ProjectLinkComponent)`
  cursor: pointer;
  margin-left: 1.5rem;
  text-decoration:none;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
  &.active {
    color: ${({ theme }) => theme.highlightColor};
    font-weight: 700;
  }
`

const NavigationMobileMenu = styled.div`
  display: grid;
  grid-gap: 4px;
  @media only screen and (min-width: ${Values.MobileResponsive}) {
    display: none;
  }
`;

const BurgerBar = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.textColor};
  transition: 0.2s linear;
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
`;

const NavigationMobileMenuExtWrapper = styled.div`
  position: fixed;
  z-index: ${ZStacks.NavigationMobileMenu};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: ${props => props.height};
  transition-property: opacity;
  transition: 0.3s linear;
  opacity: ${props => props.opacity};
  
flex-flow: column wrap;
justify-content: center;
  text-align: center;
  @media only screen and (min-width: ${Values.MobileResponsive}) {
    display: none;
  }
`;

const NavigationMobileMenuExt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  visibility: ${props => props.visibility};
  flex-grow: 1;
`;

const NavigationMobileMenuList = styled(Link)`
  text-decoration:none;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
  &.active {
    color: ${({ theme }) => theme.highlightColor};
    font-weight: 700;
  }
`;




const NavigationSocialLinks = styled.div`
  overflow: hidden;
  padding: 36px 0 36px 0;
`;


const Navigation = ({theme}) => {

  const [scrollBG, setScrollBG] = useState(true);
  const [mNavOpen, setmNavOpen] = useState(false);
  
  const scrollUpdateHandler = () => {
    if (window.scrollY > Values.NavOnScroll){
      setScrollBG(false) //colored
    } else {
      setScrollBG(true); //transparent
    }
  }

  const navMenuHandler = () => {
    if (mNavOpen) {
      setmNavOpen(false);
    } else {
      setmNavOpen(true);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollUpdateHandler)
    return () => {
      window.removeEventListener('scroll', scrollUpdateHandler)
    }
  }, [])

  return(
    <>
      <NavigationMain opacity={scrollBG === true ? "transparent" : Colors.culturewhite}>
        <NavigationWrapper id="navigation-desktop">
          <NavigationLogo>
            <Link to="/">
              <LottieLogo theme={theme}/>
            </Link>
          </NavigationLogo>
          <NavigationWebMenu>
            <ProjectLink to="/">Portfolio</ProjectLink>
            <NavWebLinks to="/About/" activeClassName="active">
              About
            </NavWebLinks>
          </NavigationWebMenu>
          <NavigationMobileMenu onClick={navMenuHandler}>
              <BurgerBar transform={mNavOpen ? "translate(0, 7px) rotate(-45deg)" : "none"}></BurgerBar>
              <BurgerBar opacity={mNavOpen ? "0" : "1"}></BurgerBar>
              <BurgerBar transform={mNavOpen ? "translate(0, -7px) rotate(45deg)" : "none"}></BurgerBar>
            </NavigationMobileMenu>
        </NavigationWrapper>
      </NavigationMain>
      <NavigationMobileMenuExtWrapper height={mNavOpen ? "100vh" : "0vh"} opacity={mNavOpen ? "1" : "0"}>
        <NavigationMobileMenuExt visibility={mNavOpen ? "visible": "hidden"}>
          <NavigationMobileMenuList to="/" activeClassName="active" onClick={navMenuHandler}>Portfolio</NavigationMobileMenuList>
          <NavigationMobileMenuList to="/About" activeClassName="active" onClick={navMenuHandler}>About</NavigationMobileMenuList>
        </NavigationMobileMenuExt>
        <NavigationSocialLinks>
          <SocialLinks textColor={({ theme }) => theme.textColor} textColorHover={({ theme }) => theme.specialColor}/>
        </NavigationSocialLinks>
      </NavigationMobileMenuExtWrapper>
    </>
  )
}

export default Navigation