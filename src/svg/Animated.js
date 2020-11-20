import React from 'react'

import {ReactComponent as ReactLogo} from '../logo.svg'

import styled, {keyframes} from 'styled-components'


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const scale = keyframes`
    0%{
        transform: scale(1)
    }
    60%{
        transform: scale(1.2)
    }
    100% {
        transform: scale(1)
    }
`
const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:#000;
}
100%{
  fill:#61DAFB;
}
`;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;


const StyledLogo = styled(ReactLogo)`
    animation: ${rotate} infinite 2s ease-in-out;
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    /* &:hover{
        animation: ${scale} infinite 2s ease-in 
    } */
    .lines{
        animation: ${fade} infinite 2s ease-in-out;
    }
    .circle {
        animation: ${pulse} infinte 2s linear;
        
    }

`

const AnimatedLogo = ()=> {
    return(
        <StyledLogo />
    )
}

export default AnimatedLogo;