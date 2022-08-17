import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from '../components/Seo';
import React, { useEffect, useState } from "react"
import { RiArrowUpLine} from "react-icons/ri";
import styled from "styled-components"
import { Colors, Values, ZStacks } from "./Variables";
import MaskedText from "../components/MaskedText";
import { v4 as uuidv4 } from 'uuid';
import StackIcon from "../components/StackIcon";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MdxImage from '../components/MdxImage';
import OhNo from '../components/OhNo';
import {Article} from '../components/MarkdownStyles'

const ScrollTop = styled.div`
  position: fixed;
  display: grid;
  place-items: end;
  z-index: ${ZStacks.ScrollToTop};
  
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  width: min(1440px, 100%);
  bottom: 0;
  margin-bottom: 24px;
`;

const ScrollTopContainer = styled.div`
  display: grid;
  place-items: center;
  z-index: ${ZStacks.ScrollToTop};
  height: 48px;
  width: 48px;
  background: ${({ theme }) => theme.inverseBackground};
  color: ${({ theme }) => theme.background};
  border-radius: 8px;
  opacity: ${props => props.opacity};
  transition: 0.2s linear;
  margin-right: 24px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Main = styled.main`
  width: min(1024px, 100%);
`;

const Header = styled.header`
  text-align: center;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    margin: 2rem 0 3rem 0;
    width: 100%;
  }
`;

const StackIconContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin: 0;

  p{
    margin:0;
    opacity: 0.5;
  }
`;

const components = {
  article: Article,
  MdxImage,
  OhNo
}

const ProjectDetails = ({ data: { mdx }}) => {

  const { title, stack, subtitle, date} = mdx.frontmatter;
  const [scrollBG, setScrollBG] = useState(true);
  const scrollUpdateHandler = () => {
    if (window.scrollY > Values.NavOnScroll*2){
      setScrollBG(false)
    } else {
      setScrollBG(true);
    }
  }

  const scrollToHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollUpdateHandler)
    return () => {
      window.removeEventListener('scroll', scrollUpdateHandler)
    }
  }, [])

  return (
    <>
      <Seo title={title + " — " + subtitle} author="Aryne Cabatan" description={title + " — " + subtitle}/>
      
      <ScrollTop>
        <ScrollTopContainer opacity={scrollBG ? '0' : '1'} onClick={scrollToHandler}>
          <RiArrowUpLine/>
        </ScrollTopContainer>
      </ScrollTop>
      
      <Main className="main-nohero">
        <Header>
          <h1 className="h1-extend">
            <MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}>{title}</MaskedText>
          </h1>
          <h2>{subtitle}</h2>
          <StackIconContainer>
            {stack.map(icon =>(
              <StackIcon key={uuidv4()} iconName={icon}/>
            ))}
            <p>● {date}</p>
          </StackIconContainer>
          <section>
            <GatsbyImage image={getImage(mdx.frontmatter.thumb)} alt={title} imgStyle={{ borderRadius: '0.75rem' }}/>
          </section>
        </Header>
        <MDXProvider components={components}>
          <MDXRenderer frontmatter={mdx.frontmatter}>
            {mdx.body}
          </MDXRenderer>
        </MDXProvider>
      </Main>
    </>
  )
}

export default ProjectDetails;

export const query = graphql`
  query ProjectsDetails($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        subtitle
        slug
        projecttype
        projectorder
        stack
        date(formatString: "MMM YYYY")
        thumb {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
              width: 960
            )
          }
        }
      }
    }
  }
`