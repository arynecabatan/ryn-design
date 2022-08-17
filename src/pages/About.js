import * as React from "react"
import Seo from '../components/Seo';
import MaskedText from "../components/MaskedText";
import { Colors, AboutMe } from "../components/Variables";
import styled from "styled-components";
import HeroBackground from "../components/HeroBackground";
import { StaticImage } from "gatsby-plugin-image"
import { TbDownload } from "react-icons/tb";
import ContactForm from '../components/ContactForm';

//Container
const HeroDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const AvatarDiv = styled.div`
  display:flex;
  flex: 1 0;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 3rem 0 3rem;
`;

const Description = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    margin-top: 1rem;
  }
`;

const BriefDiv = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  margin: 3rem 0;
  h2{
    max-width: 40ch;
    width: 100%;
  }
`;

const AboutMeDiv = styled.div`
  gap: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  div {
    flex: 1 0;
    white-space: pre-line;
  }
`;

const Test = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 3rem;
`;

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    align-items: start;
  }

  h5{
    color: ${Colors.sizzlingred};
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    font-size: clamp(1.563rem, 0.3744rem + 6.6857vw, 1.953rem);
    list-style-type: none;
    justify-content: center;
    padding: 0;
    gap: 0.75rem;
    width: 50%;
    @media only screen and (max-width: 768px) {
      width: auto;
      justify-content: start;
    }
  }
`;


const Section = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const ContactWrapper = styled.section`
  width: min(1440px, 100%);
  height: 100%;
  padding: 72px 24px 72px 24px;
  display: grid;
  place-items: center;
`;

const About = () => {
  return (
    <>
      <Seo title="About" author="Aryne Cabatan" description="About Aryne"/>
      <HeroDiv>
        <HeroBackground heroheight="85vh" heroimage="about" heroopacity="0.15">
          <div>
            <AvatarDiv>
              <StaticImage
                src={"../assets/images/profile.png"}
                alt="Hero Background" //need to be change
                formats={["auto", "webp", "avif"]}
                placeholder="blurred"
                aspectRatio={1/1}
                width={300}
                imgStyle={{
                  margin: "0 0 1rem 0"
                }}
              />
            </AvatarDiv>
            <Description>
              <h1 className="h1-extend">
                <MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}>Hi! I'm Aryne</MaskedText>
              </h1>
              <h2>A designer who codes</h2>
              <div>
                  <a href={AboutMe.Resume} target="_blank" rel="noreferrer">
                    <button><TbDownload/> Resume</button>
                  </a>
              </div>
            </Description>
          </div>
        </HeroBackground>
      </HeroDiv>
      <main>
        <BriefDiv>
          <h2>"I build<MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}> products and websites </MaskedText>focusing on delivering <MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}> beautiful user experience.</MaskedText>"</h2>
        </BriefDiv>
        <AboutMeDiv>
          <div>
            <h2>
              <MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}>About Me</MaskedText>
            </h2>
            <p>{AboutMe.FullDetails}</p>
          </div>
          <div>
            <Test>
              <SkillDiv>
                <h5>Design Tools</h5>
                <ul>
                  {AboutMe.DesignTools.map((a)=>(
                    <li key={a.title} data-tip={a.title} title={a.title}><a.icons/></li>
                  ))}
                </ul>
              </SkillDiv>
              <SkillDiv>
                <h5>Development Tools</h5>
                <ul>
                  {AboutMe.DevTools.map((a)=>(
                    <li key={a.title} data-tip={a.title} title={a.title}><a.icons/></li>
                  ))}
                </ul>
              </SkillDiv>
            </Test>
          </div>
        </AboutMeDiv>
        <Section id="contact">
          <ContactWrapper>
            <ContactForm/>
          </ContactWrapper>
        </Section>
      </main>
    </>
  )
}

export default About
