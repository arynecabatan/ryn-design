import React from 'react'
import styled from 'styled-components'
import { SocialList } from "./Variables";

const StyledSocialLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;
  text-align: center;
  width: 100%;
  justify-content: center;
  font-size: 2rem;
`;

const StyledAnchor = styled.a`
  color: ${props => props.textColor};
  transition: 0.4s ease;

  &:hover {
    color: ${props => props.textColorHover};
  }
`;

const SocialLinks = ({textColor, textColorHover}) => {
  return(
    <StyledSocialLinks>
        {SocialList.map((a)=>(
          <StyledAnchor textColor={textColor} textColorHover={textColorHover} key={a.id} target="_blank" rel="noreferrer" href={a.link}>
            <a.icon/>
          </StyledAnchor>
        ))}
    </StyledSocialLinks>
  );

}

export default SocialLinks;