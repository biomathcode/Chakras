import React from 'react'

import {ReactComponent as Chakraone} from '../asserts/chakraone.svg'
import {ReactComponent as Chakratwo} from '../asserts/chakratwo.svg'

import {ReactComponent as Chakrathree} from '../asserts/chakrathree.svg'

import {ReactComponent as Chakrafour} from '../asserts/chakrafour.svg'

import {ReactComponent as Chakrafive} from '../asserts/chakrafive.svg'

import {ReactComponent as ChakraSix} from '../asserts/chakrasix.svg'

import {ReactComponent as ChakraSeven} from '../asserts/chakraseven.svg'

import {ReactComponent as ChakraMap} from './labelled.svg'




import styled, {keyframes} from 'styled-components'


// const rotate=() => keyframes`
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// `
// const antirotate = keyframes`
//     from{
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(-360deg);
//     }
// `
const scale = keyframes`
    0%{
        transform: scale(1)
    }
    50%{
        transform: scale(1.07)
    }
    100% {
        transform: scale(1)
    }
`
// const fade = keyframes`
// 0% {
// fill:#61DAFB;
// }
// 50% {
//  fill:#000;
// }
// 100%{
//   fill:#61DAFB;
// }
// `;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(1.5);
  opacity: 0;
  transform-origin: center;
}
`;


// const StyledLogo = styled(ReactLogo)`
//     height: 25rem;
//     width: 25rem;
//     display: block;
//     margin: auto;
//     &:hover{
//         animation: ${scale} infinite 2s ease-in 
//     }
//     .frame-1{
//         transform-origin: 539.28px 539.095px;
//         animation: ${rotate} infinite 20s linear;
//     }
//     .frame-2 {
//         transform-origin: center;
//         animation: ${antirotate} infinite 20s linear;
//     }
//     .lines{
//         animation: ${fade} infinite 2s ease-in-out;
//     }
//     .circle {
//         animation: ${pulse} infinte 2s linear;
        
//     }

// `


const AnimeOne = styled(Chakraone)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`
export const ChakraMapAnimated = styled(ChakraMap)`
    height: 23rem;
    width: 23rem;
    display: block;
    margin: auto;
    .chakraAnimated{
      all: unset;
      z-index: 997;
      cursor: pointer;
      transition: transform .2s;
    }
    .triangle{
      transform-origin: 50% 50%;
      animation: ${pulse} infinite 3s;
      
    }
    .chakraAnimated:hover{
      z-index: 999;
      -ms-transform: scale(1.05); /* IE 9 */
      -webkit-transform:  scale(1.05); /* Safari 3-8 */
      transform:  scale(1.05); 
    }
    .coAxialCircals{
      transform-origin: 50% 50%;
      animation: ${pulse} infinite 3s;
      animation-delay: 2s
    }
`
export const AnimeTwo = styled(Chakratwo)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`

export const AnimeThree = styled(Chakrathree)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`

export const AnimeFour = styled(Chakrafour)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`

export const AnimeFive = styled(Chakrafive)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`

export const AnimeSix = styled(ChakraSix)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`

export const AnimeSeven = styled(ChakraSeven)`
    height: 25rem;
    width: 25rem;
    display: block;
    margin: auto;
    &:hover{
        animation: ${scale} infinite 2s ease-in 
    }
`
export const AnimatedChakraOne = () => ( <AnimeOne/>)




