import React from 'react';
import styled from 'styled-components'
import SocialLinks from "../components/SocialLinks"
import {Colors} from './Variables'

const StyledFooter = styled.footer`
  background-image: ${Colors.ryngradient};
  color: ${Colors.culturewhite};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  height: 300px;
  text-align: center;
  padding: 72px 0 12px 0;
  clip-path: polygon(0 14%, 100% 0, 100% 100%, 0% 100%);
  margin-top: 4.5rem;

  p{
    color: ${Colors.culturewhite};
  }
`;

const Footer = () => {
  return(
      <StyledFooter>
        <SocialLinks textColor={Colors.culturewhite} textColorHover={Colors.spacecadet}/>
        <p>Design & Develop by Ryn Design, 2022</p>
      </StyledFooter>
  )
}

export default Footer;