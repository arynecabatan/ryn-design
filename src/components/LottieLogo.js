import React, {useState} from 'react';
import Lottie from 'react-lottie-player'
import LogoLottie from '../assets/images/ryndesign-lottie-logo.json';

const LottieLogo = ({theme}) =>{

  const [isStop, setIsStop] = useState(true);

  return(
    <div role="presentation" onMouseEnter={()=>setIsStop(!isStop)} onMouseLeave={()=>setIsStop(!isStop)}>
    <Lottie
      loop={true}
      animationData={LogoLottie}
      play={!isStop}
      style={{ width: 33, height: 42 }}
    />
    </div>
  )
}

export default LottieLogo;