import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {Values} from '../components/Variables'

const ImageWrapper = styled.div`
  display: grid;
  overflow: hidden;
  width: 100%;
`;

const Content = styled.div`
  grid-area: 1/1;
  position: relative;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  z-index: 300;
  margin-top: calc(${Values.NavbarHeight});
  padding-bottom: 2rem;
`;

const GatsbyImagess = styled(GatsbyImage)`
  grid-area: 1/1;
  
  min-height: ${props => props.heroheight};
  height: 100%;
  z-index: 100;
  @media only screen and (min-width: 420px) {
    height: ${props => props.heroheight};
    min-height: 100%;
  }
`;



const HeroBackground = ({children, heroheight, heroimage, heroopacity}) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      aa: allFile(filter: {relativePath: {eq: "photo2.jpg"}}) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      bb: allFile(filter: {relativePath: {eq: "AboutMe_cover.jpg"}}) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }`)

  return(
    <ImageWrapper heroheight={heroheight}>

      <GatsbyImagess image={
        heroimage === "portfolio" ? getImage(data.aa.nodes[0]) :
        heroimage === "about" ? getImage(data.bb.nodes[0]) :
        getImage(data.bb.nodes[0])
      } alt="Test" height={heroheight} heroheight={heroheight}
      style={{
        opacity:`${heroopacity}`,
      }}/>
      <Content>
        {children}
      </Content>
    
    </ImageWrapper>
  )
}

export default HeroBackground;
