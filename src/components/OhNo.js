import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie-player'
import DoggyLottie from '../assets/images/95642-sad-dog.json';
import { TbExternalLink } from "react-icons/tb";

const OhNoWrapper = styled.div`
  background: red;
  border-radius: 1rem;
  aspect-ratio: 4 / 3;
  background-color: ${({ theme }) => theme.codeBox};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding-right: 1rem;
  padding-left: 1rem;

  h5{
    margin-top: 2rem;
  }

  small{
    margin-top: 0.5rem;
    opacity: 0.7;
  }

`;

const CLottie = styled(Lottie)`
  height: min(420px, 100%);
  width: min(420px, 100%);
`

const OhNo = ({frameurl}) => {

  return(
    <OhNoWrapper>
      <CLottie
        loop={true}
        play
        animationData={DoggyLottie}/>
      <h5>Hi! Adobe has some issue with embedding their XD prototype.</h5>
      <a target="_blank" rel="noreferrer" href={frameurl}>
        <button><TbExternalLink/> Check it here instead</button>
      </a>
      <small><em>(Don't worry it's just a redirect to Adobe's Domain)</em></small>
    
      </OhNoWrapper>
  )
}

export default OhNo;