import * as React from "react"
import Seo from '../components/Seo';

import Lottie from 'react-lottie-player';
import NotFoundLottie from '../assets/images/404.json';
import styled from "styled-components";
import { TbHome } from "react-icons/tb";

const NotFoundWrapper = styled.main`
  display: grid;
  place-items: center;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    aspect-ratio: 16/9;

    a{
      margin-top: 3rem;
    }
  }
`;

const CLottie = styled(Lottie)`
  height: min(480px, 100%);
  width: min(853px, 100%);
`

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Page Not Found" author="Aryne Cabatan" description="Oops! Wrong content"/>
      <NotFoundWrapper>
        <div>
          <CLottie
            loop={true}
            play
            animationData={NotFoundLottie}/>
            
          <a href="/"><button><TbHome/> Return Home</button></a>
        </div>

      </NotFoundWrapper>
    </>
  )
}

export default NotFoundPage
