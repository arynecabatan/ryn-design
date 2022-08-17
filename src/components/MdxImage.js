import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 1rem 0 2rem 0;
`;

const MdxImage = ({imageDirectory, imageDescription}) => {

    const data = useStaticQuery(graphql`
    query MdxImages {
        allFile(filter: {extension: {eq: "png"}}) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF, PNG]
                  layout: CONSTRAINED
                  quality: 100
                )
              }
            }
          }
        }
      }
    `)

    const imageset = data.allFile.edges
    const fullInclude = `${imageDirectory}`;
    return(
      <ImageContainer>{
        imageset.filter(imagex => imagex.node.name.includes(fullInclude))
        .map(filterImage =>(
            <GatsbyImage key={filterImage.node.id} image={getImage(filterImage.node)} alt={imageDescription} />
        ))

      }</ImageContainer>
    );
}

export default MdxImage;