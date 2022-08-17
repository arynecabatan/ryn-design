import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import StackIcon from "../components/StackIcon";
import MaskedText from "../components/MaskedText";
import { Colors } from "../components/Variables";

const ProjectGridDiv = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 48px 0px;

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px 24px;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 48px 24px;
  }
`;

const StackIconContainer = styled.div`
  display: flex;
  margin: 0px 0.75rem 0.75rem 0px;
  gap: 0.5rem;
`;

const ThumbnailDiv = styled.div`
  display: grid;
  overflow: hidden;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 3px 6px;

  div{
    grid-area: 1/1;
    z-index: 400;
    border-radius: 12px;
    display: flex;
    justify-content: end;
    align-items: end;
    background-color: transparent;
    transition: 0.50s linear;
    div{
      opacity: 0;
      color: ${({ theme }) => theme.background};
    }
    &:hover{
      background-color:rgba(0,0,0,0.2);
      div{
        opacity: 1;
        background-color: transparent;
      }
    }

  }
`;

const GatsbyImagess = styled(GatsbyImage)`
  grid-area: 1/1;
  z-index: 100;
`;

const ProjectDescription = styled.div`
  margin-top: 1rem;
`;


const Highlights = ({ items, highlights }) => {

  //const xhighlights = ["homey", "unesco"]

  return (
    <ProjectGridDiv>
      {
        items.filter(project => {
          return highlights.includes(project.frontmatter.slug)})
        .map(project =>(
          <div key={project.id}>
            <Link to={"/projects/" + project.frontmatter.slug}>
              <ThumbnailDiv>
                <GatsbyImagess
                  image={getImage(project.frontmatter.thumb)}
                  alt="project.frontmatter.title"
                  imgStyle={{ borderRadius: '12px' }}/>
                <div>
                  <StackIconContainer>
                    {project.frontmatter.stack.map(icon =>(
                      <StackIcon key={uuidv4()} iconName={icon}/>
                    ))}
                  </StackIconContainer>
                </div>
              </ThumbnailDiv>
              <ProjectDescription>
                <h3>
                  <MaskedText
                    initialColor={Colors.sizzlingred}
                    finalColor={Colors.tartorange}>
                      {project.frontmatter.title}
                  </MaskedText>
                </h3>
                <p>{project.frontmatter.subtitle}</p>
              </ProjectDescription>
            </Link>
          </div>

        ))
      }
    </ProjectGridDiv>
  );
};

export default Highlights;

/*

        items.filter(project => { return !xhighlights.includes(project.frontmatter.slug)})
        .map(project =>(
          <h1>{project.frontmatter.title}</h1>
        ))

          <div key={project.id}>
            <Link to={"/projects/" + project.frontmatter.slug}>
              <ThumbnailDiv>
                <GatsbyImagess
                  image={getImage(project.frontmatter.thumb)}
                  alt="project.frontmatter.title"
                  imgStyle={{ borderRadius: '12px' }}/>
                <div>
                  <StackIconContainer>
                    {project.frontmatter.stack.map(icon =>(
                      <StackIcon key={uuidv4()} iconName={icon}/>
                    ))}
                  </StackIconContainer>
                </div>
              </ThumbnailDiv>
              <ProjectDescription>
                <h3>
                  <MaskedText
                    initialColor={Colors.sizzlingred}
                    finalColor={Colors.tartorange}>
                      {project.frontmatter.title}
                  </MaskedText>
                </h3>
                <p>{project.frontmatter.subtitle}</p>
              </ProjectDescription>
            </Link>
          </div>

*/