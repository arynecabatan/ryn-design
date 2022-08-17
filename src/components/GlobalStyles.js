import {createGlobalStyle} from "styled-components"
import {Colors, Values} from './Variables'


export const GlobalStyles = createGlobalStyle`

  :root{
    --font-size-sm: clamp(0.71rem, 0.45vw + 0.61rem, 0.8rem);
    --font-size-base: clamp(0.89rem, 0.56vw + 0.76rem, 1rem);
    --font-size-md: clamp(1.11rem, 0.7vw + 0.95rem, 1.25rem);
    --font-size-lg: clamp(1.39rem, 0.88vw + 1.19rem, 1.56rem);
    --font-size-xl: clamp(1.74rem, 1.1vw + 1.48rem, 1.95rem);
    --font-size-xxl: clamp(2.17rem, 1.37vw + 1.86rem, 2.44rem);
    --font-size-xxxl: clamp(2.71rem, 1.71vw + 2.32rem, 3.05rem);
    --font-size-mast: clamp(3.22rem, 1.71vw + 2.32rem, 3.56rem);
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.highlightColor} transparent;
  }

  *::selection {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.highlightColor};
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.highlightColor};
    border-radius: 0px;
    border: transparent;
    transition: 0.4s ease-in-out;
  }
    
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.inverseBackground};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html, body {
    height: 100%;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: ${Values.BaseFontSize};
    line-height: normal;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({theme}) => theme.background};
    font-size: var(--font-size-base);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  label{
    font-size: var(--font-size-sm)
  }

  p, h1, h2, h3, h4, h5{
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
  
  main{
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto 0 auto;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    min-height: 100vh;
  }

  .main-nohero{
    padding-top: ${Values.NavbarHeight}
  }

  h1 {font-size: var(--font-size-xxxl);font-weight: 900;}
  h2 {font-size: var(--font-size-xxl);}
  h3 {font-size: var(--font-size-xl);}
  h4 {font-size: var(--font-size-lg);}
  h5 {font-size: var(--font-size-md);}
  p {
    font-size: var(--font-size-base);
    margin-bottom: 1rem;
    line-height:var(--font-size-xl);
    color: ${({ theme }) => theme.textColor};
  }
  small .text_small {font-size: var(--font-size-sm);}
  .h1-extend {font-size: var(--font-size-mast);}
  h2, h3{font-weight: 700;}
  h4, h5{font-weight: 600;}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.highlightColor};

    &:hover{
    }
  }

  .active-btn{
    color: ${({ theme }) => theme.highlightColor} !important;
    font-weight: 700;
    background-color: ${({ theme }) => theme.divider} !important;
    opacity: 1 !important;
  }

  .divider{
    background-color: transparent;
    width: 100%;
    height: 0.2px;
    border-bottom: 0.2px solid ${({ theme }) => theme.divider};
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 12px;

    div{
      display: flex;
      flex-direction: column;
    }
  }

  input {
    background: transparent;
    color: ${({ theme }) => theme.inverseBackground};
    height: 48px;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.inverseBackground};
    border-radius: 8px;
    outline: none;

    &:focus{
      border: 2px solid ${({ theme }) => theme.highlightColor};
    }
  }

  textarea {
    background: transparent;
    color: ${({ theme }) => theme.inverseBackground};
    border: none;
    resize: vertical;
    outline: none;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.inverseBackground};
    border-radius: 8px;

    &:focus{
      border: 2px solid ${({ theme }) => theme.highlightColor};
    }
  }

  button{
    background-image: ${Colors.ryngradient};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-align: center;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: none;
    cursor: pointer;
    margin-top: 16px;
    color: ${Colors.culturewhite};
  }
`