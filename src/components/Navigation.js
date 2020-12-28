import React from 'react';
import { useSpring, animated} from 'react-spring'

import {Helmet} from 'react-helmet';
import {ChakraMapAnimated} from '../svg/Animated';
import Flavicon from '../asserts/favicons/chakraone.ico'
const Navigation = () => {
  const props = useSpring({opacity: 1, from : {opacity: 0}})

  // const chakradata = [
  //   {
  //     name: "Muladhara",
  //     src: ChakraOne,
  //     class: "button1",
  //     key: '#123'
  // }, 
  // {
  //   name: "Svadhisthana",
  //   src: ChakraTwo,
  //   class: "button2",
  //   key: '#123522'
  // },
  // {
  //   name: 'Manipura',
  //   src: ChakraThree,
  //   class: "button3",
  //   key: '#143526'
  // },
  // {
  //   name: "Anahata",
  //   src: ChakraFour,
  //   class: "button4",
  //   key: '#232543'
  // },
  // {
  //   name: "Vishuddha",
  //   src: ChakraFive,
  //   class: "button5",
  //   key: '#232asd'
  // }, 
  // {
  //   name: "Ajna",
  //   src: ChakraSix,
  //   class: "button6",
  //   key: '#2648846'
  // },
  // {
  //   name: "Sahasrara",
  //   src: ChakraSeven,
  //   class: "button7",
  //   key: '#24573785'
  // }]
  return  (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title> Chakras </title>
                <link id="favicon" rel="icon" href={Flavicon} type="image/x-icon"/> 
      </Helmet>
        <div className="sub-container">
            <animated.div style={props}>
              <ChakraMapAnimated />
            </animated.div>
            {/* <animated.img style={props} src={BodyMap} className="image" alt="logo" width="360px " height="360px"/> */}
            {/* {chakradata.map((chakra) => {
            return (
            <div key={chakra.key} style={{"display": "flex"}}>
                <Link to={"/" + chakra.name}>
                <button type="button" className={chakra.class}>
                    <img src={chakra.src} width='45' height="45" alt={chakra.name}/>
                </button>
                </Link>
                
                <div className="hide">
                    {chakra.name}
                </div>
            </div>
            )
            })} */}
            <animated.h1 style={props} className="header">Chakras</animated.h1>
            <p>Click on the Chakras to know more...</p> 
        </div>
    </div>
  )
}

export default Navigation