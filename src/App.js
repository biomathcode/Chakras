import React from 'react'
import './App.css';
import { useSpring, animated} from 'react-spring'
import Particles from './components/Particles'
import BodyMap from './svg/completeBody.svg'
import ChakraOne from './asserts/chakraone.svg'
import ChakraTwo from './asserts/chakratwo.svg'
import ChakraThree from './asserts/chakrathree.svg';
import ChakraFour from './asserts/chakrafour.svg'
import ChakraFive from './asserts/chakrafive.svg';
import ChakraSix from './asserts/chakrasix.svg';
import ChakraSeven from './asserts/chakraseven.svg';
import {useHistory} from 'react-router-dom';


function App() {
  const props = useSpring({opacity: 1, from : {opacity: 0}})

  const history = useHistory();

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

  return (
    <div className="App">
      <div className="particle_container">
      <Particles className="particles"/>
      </div>
      <div className="sub-container">
        
        <animated.img style={props} src={BodyMap} className="image" alt="logo" width="400px" height="400px"/>
        {chakradata.map((chakra) => {
          return (
        <div key={chakra.key} style={{"display": "flex"}}>
              <button type="button" onClick={() => history.push("/" + chakra.name)} className={chakra.class}>
                <img src={chakra.src} width='45' height="45" alt={chakra.name}/>
              </button>
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
  );
}

export default App;
