import React from "react"
import {
  SiAdobephotoshop, SiAdobelightroom, SiAdobepremierepro, SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobexd, SiAdobeacrobatreader, SiSketch, SiFigma, SiFramer, SiHtml5, SiJavascript, SiCss3, SiReact, SiGatsby, SiWordpress, SiMarkdown, SiJava, SiPython, SiArduino, SiGit, SiSquarespace, SiGraphql
} from 'react-icons/si';
import { IoMdHelp } from "react-icons/io";
import styled from "styled-components";

const StackIconContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  opacity: 0.5;
  font-size: 1.25rem;
`;

const StackIcon = ({iconName}) =>{

  let iconType;

  if (iconName === "Adobe Photoshop"){
    iconType = <SiAdobephotoshop/>
  } else if (iconName === "Adobe Illustrator"){
    iconType = <SiAdobeillustrator/>
  } else if (iconName === "Adobe InDesign"){
    iconType = <SiAdobeindesign/>
  } else if (iconName === "Adobe Lightroom"){
    iconType = <SiAdobelightroom/>
  } else if (iconName === "Adobe XD"){
    iconType = <SiAdobexd/>
  } else if (iconName === "Adobe Premiere"){
    iconType = <SiAdobepremierepro/>
  } else if (iconName === "Adobe After Effects"){
    iconType = <SiAdobeaftereffects/>
  } else if (iconName === "Adobe Acrobat Reader"){
    iconType = <SiAdobeacrobatreader/>
  } else if (iconName === "Sketch"){
    iconType = <SiSketch/>
  } else if (iconName === "Figma"){
    iconType = <SiFigma/>
  } else if (iconName === "Framer"){
    iconType = <SiFramer/>
  } else if (iconName === "HTML5"){
    iconType = <SiHtml5/>
  } else if (iconName === "Javascript"){
    iconType = <SiJavascript/>
  } else if (iconName === "CSS3"){
    iconType = <SiCss3/>
  } else if (iconName === "React"){
    iconType = <SiReact/>
  } else if (iconName === "Gatsby"){
    iconType = <SiGatsby/>
  } else if (iconName === "Wordpress"){
    iconType = <SiWordpress/>
  } else if (iconName === "Markdown"){
    iconType = <SiMarkdown/>
  } else if (iconName === "Java"){
    iconType = <SiJava/>
  } else if (iconName === "Python"){
    iconType = <SiPython/>
  } else if (iconName === "Arduino"){
    iconType = <SiArduino/>
  } else if (iconName === "Git"){
    iconType = <SiGit/>
  } else if (iconName === "Squarespace"){
    iconType = <SiSquarespace/>
  } else if (iconName === "Graphql"){
    iconType = <SiGraphql/>
  } else {
    iconType = <IoMdHelp/>
  }

  return(
      <StackIconContainer data-tip={iconName} title={iconName}>
        {iconType}
      </StackIconContainer>
  );
}

export default StackIcon;