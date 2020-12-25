import React from 'react';
import { useSpring, animated} from 'react-spring'

import {Switch, Route, Link} from 'react-router-dom';
import Particles from './Particles'
import BodyMap from '../svg/completeBody.svg'
import ChakraOne from '../asserts/chakraone.svg'
import ChakraTwo from '../asserts/chakratwo.svg'
import ChakraThree from '../asserts/chakrathree.svg';
import ChakraFour from '../asserts/chakrafour.svg'
import ChakraFive from '../asserts/chakrafive.svg';
import ChakraSix from '../asserts/chakrasix.svg';
import ChakraSeven from '../asserts/chakraseven.svg';
import Muladhara from './ChakraOne';
import Svadhisthana from './ChakraTwo';
import Manipura from './ChakraThree';
import Anahata from './ChakraFour';
import Vishuddha from './ChakraFive';
import Ajna from  './ChakraSix';
import Sahasrara from './ChakraSeven';
import App from '../App';

const Navigation = () => {
    const props = useSpring({opacity: 1, from : {opacity: 0}})

  const chakradata = [
    {
      name: "Muladhara",
      src: ChakraOne,
      class: "button1",
      key: '#123'
  }, 
  {
    name: "Svadhisthana",
    src: ChakraTwo,
    class: "button2",
    key: '#123522'
  },
  {
    name: 'Manipura',
    src: ChakraThree,
    class: "button3",
    key: '#143526'
  },
  {
    name: "Anahata",
    src: ChakraFour,
    class: "button4",
    key: '#232543'
  },
  {
    name: "Vishuddha",
    src: ChakraFive,
    class: "button5",
    key: '#232asd'
  }, 
  {
    name: "Ajna",
    src: ChakraSix,
    class: "button6",
    key: '#2648846'
  },
  {
    name: "Sahasrara",
    src: ChakraSeven,
    class: "button7",
    key: '#24573785'
  }]
  return  (
    <div>
        <Switch>
            <Route  path="/Muladhara" component={Muladhara} />
            <Route  path="/Svadhisthana" component={Svadhisthana} />
            <Route  path="/Manipura" component={Manipura} />
            <Route  path="/Anahata" component={Anahata} />
            <Route  path="/Vishuddha" component={Vishuddha} />
            <Route  path="/Ajna" component={Ajna} />
            <Route  path="/Sahasrara" component={Sahasrara} />
        </Switch>
        <div className="particle_container">
        <Particles className="particles"/>
        </div>
        <div className="sub-container">
            
            <animated.img style={props} src={BodyMap} className="image" alt="logo" width="400px" height="400px"/>
            {chakradata.map((chakra) => {
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
            })}
            <h1 className="header">Chakras</h1>
            <p>Click on the Chakras to know more...</p> 
        </div>
    </div>
  )
}

export default Navigation