import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  background: linear-gradient(to left, ${props => props.initialColor}, ${props => props.finalColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin:0;

  &::selection{
    -webkit-text-fill-color: ${({ theme }) => theme.highlightColor};
    background: ${({ theme }) => theme.textColor};
  }
`;

const MaskedText = ({children, initialColor, finalColor}) => {
  
  return(
    <Span initialColor={initialColor} finalColor={finalColor}>
      {children}
    </Span>
  )
}

export default MaskedText;
