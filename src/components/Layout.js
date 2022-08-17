import React from 'react'
import { GlobalStyles } from "./GlobalStyles"
import Navigation from './Navigation';
import { Theme } from "./Theme"
import {ThemeProvider} from "styled-components"
import Footer from './Footer';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import particlesOptions from "../assets/images/particles.json"
import { Colors } from "../components/Variables";
import { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };

  return(
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <Navigation/>
      {children}
      <Footer/>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            border: `none`,
            padding: '16px',
            margin: '0 0 3rem 0',
            color: `${Colors.culturewhite}`,
            backgroundColor: `${Colors.spacecadet}`
          },
        }}
      />
    </ThemeProvider>
  )
}

export default Layout;