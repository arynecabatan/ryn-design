import { v4 as uuidv4 } from 'uuid';
import { SiBehance, SiDribbble, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import {
  SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobeillustrator,
  SiAdobeindesign, SiAdobelightroom, SiAdobexd, SiAdobeacrobatreader, SiSketch,
  SiFigma, SiFramer, SiHtml5, SiJavascript, SiCss3, SiReact, SiGatsby, SiWordpress,
  SiMarkdown, SiJava, SiPython, SiArduino, SiGit, SiSquarespace, SiGraphql
} from 'react-icons/si';


export const Colors = {
  spacecadet: '#373152',
  culturewhite: '#f5f5f5',
  sizzlingred: '#ff2c55',
  tartorange: '#fd4e4b',
  ryngradient: 'linear-gradient(to left, #ff2c55, #fd4e4b)'
}

export const ZStacks = {
  Navigation: 9995,
  NavigationMobileMenu: 9994,
  ScrollToTop: 9993,
  ParticleBG: 10 
}

export const Values = {
  NavbarWidth: '1440px',
  NavbarHeight: '72px',
  MobileResponsive: '412px',
  BaseFontSize: '18px',
  MobileFontSize: '16px',
  ButtonContainer: '600px',
  HeroHeight: '45vh',
  NavOnScroll: '220'
}

export const SocialList = [
  {
    id: uuidv4(),
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/arynecabatan/',
    icon: SiLinkedin},
  {
    id: uuidv4(),
    name: 'Instagram',
    link: 'https://www.instagram.com/ryn.design/',
    icon: SiInstagram},
  {
    id: uuidv4(),
    name: 'Github',
    link: 'https://github.com/arynecabatan',
    icon: SiGithub},
  {
    id: uuidv4(),
    name: 'Behance',
    link: 'https://www.behance.net/arynecabatan',
    icon: SiBehance},
  {
    id: uuidv4(),
    name: 'Dribbble',
    link: 'https://dribbble.com/Ryn_Design',
    icon: SiDribbble}
]

export const AboutMe = {
  id: uuidv4(),
  FullDetails:
    `I am a visual designer wearing many hats that focusing on delivering beautiful user experiences. I provide creative solutions that aim at usability and simplicity all while meeting deadlines with high-quality output. Through projects I worked on, I incorporated research, design thinking, and creative processes.

    As a designer, my design thinking is heavily influenced by the gestaltism/KIS principle with the use of bold and playful elements. 
    
    Additionally, I have an intermediate background in web and Android front-end development that help me to design feasible and usable interfaces.
    
    In my spare time, I dedicate myself to learn trade skills and things that piqued my interest and when not, I play video games.
    `,

  Resume: 'https://firebasestorage.googleapis.com/v0/b/ryndesign.appspot.com/o/CabatanAryne_Resume.pdf?alt=media&token=9d838604-6a53-462d-97dc-41c1e064e332',
  DesignTools: [
    {icons: SiAdobephotoshop, title: "Adobe Photoshop"},
    {icons: SiAdobeillustrator, title: "Adobe Illustrator"},
    {icons: SiAdobeindesign, title: "Adobe InDesign"},
    {icons: SiAdobelightroom, title: "Adobe LightroomCC"},
    {icons: SiAdobexd, title: "Adobe XD"},
    {icons: SiAdobeacrobatreader, title: "Adobe Acrobat DC"},
    {icons: SiAdobepremierepro, title: "Adobe Premier"},
    {icons: SiAdobeaftereffects, title: "Adobe After Effects"},
    {icons: SiSketch, title: "Sketch"},
    {icons: SiFigma, title: "Figma"},
    {icons: SiFramer, title: "Framer"},
  ],
  DevTools: [
    {icons: SiHtml5, title: "HTML5"},
    {icons: SiCss3, title: "CSS3"},
    {icons: SiJavascript, title: "Javascript - ES6"},
    {icons: SiReact, title: "ReactJS"},
    {icons: SiGatsby, title: "Gatsby"},
    {icons: SiGraphql, title: "GraphQL"},
    {icons: SiWordpress, title: "Wordpress"},
    {icons: SiSquarespace, title: "Squarespace"},
    {icons: SiMarkdown, title: "Markdown"},
    {icons: SiGit, title: "Git"},
    {icons: SiJava, title: "Java"},
    {icons: SiPython, title: "Python"},
    {icons: SiArduino, title: "Arduino"},
  ]
}

export const ProjectList = {
  Highlights: ["homey", "unesco", "classique"]
}

