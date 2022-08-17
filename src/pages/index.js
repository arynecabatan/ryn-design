import React, {useState} from "react"
import Seo from '../components/Seo';
import { graphql } from "gatsby";
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import Highlights from '../components/Highlights';
import MaskedText from "../components/MaskedText";
import { Colors, ProjectList } from "../components/Variables";
import styled from "styled-components";
import HeroBackground from "../components/HeroBackground";

const allCategories = ['All', 'Design', 'Develop'];

const HeroDiv = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
`;

const ProjectArea = styled.section`
  margin: 2rem;

  h5{
    margin-top: 3.5rem;
  }
`;

const IndexPage = ({data}) => {

  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(data.AllProject.nodes);

  const filterItems = (category) => {
    if (category === 'Design') {
      setMenuItems(data.DesignProject.nodes);
      return;
    } else if (category === 'Develop'){
      setMenuItems(data.DevelopProject.nodes);
      return;
    }
    setMenuItems(data.AllProject.nodes);
  };


  return (
    <>
      <Seo title="Portfolio" author="Aryne Cabatan" description="Ryn Design Portfolio"/>
      <HeroDiv>
        <HeroBackground heroheight="45vh" heroimage="portfolio" heroopacity="0">
          <h1 className="h1-extend">
            <MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}>My Portfolio</MaskedText>
          </h1>
          <h5>Check out my projects from design to development</h5>
        </HeroBackground>
      </HeroDiv>
      <main>
        {/**
        <Categories categories={categories} filterItems={filterItems} />
        <div className='divider'></div>
         */}

        <ProjectArea>
          <Highlights items={menuItems} highlights={ProjectList.Highlights}/>
          <h5>Other Projects</h5>
          <Menu items={menuItems} highlights={ProjectList.Highlights}/>
        </ProjectArea>
      </main>
    </>
  )
}

export default IndexPage

export const query = graphql`
query ProjectsPage {

  AllProject: allMdx
    (sort: {order: ASC, fields: frontmatter___projectorder}){
    nodes {
      id
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
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }

  DesignProject: allMdx(
    filter: {frontmatter: {projecttype: {in: "design"}}},
    sort: {order: ASC, fields: frontmatter___projectorder}){
    nodes {
      id
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
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }

  DevelopProject: allMdx(
    filter: {frontmatter: {projecttype: {in: "develop"}}}
    sort: {order: ASC, fields: frontmatter___projectorder}){
    nodes {
      id
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
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
}
`;