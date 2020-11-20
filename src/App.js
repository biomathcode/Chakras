import React from 'react'
import './App.css';
import { useSpring, animated} from 'react-spring'
import Particles from './components/Particles'
import BodyMap from './Media/BodyMap.png'
import AnimatedLogo from './svg/Animated';

function App() {
  const props = useSpring({opacity: 1, from : {opacity: 0}})
  const transition = useSpring({opacity: 1, from : {opacity: 0}})

  const handleClick=()=>   {
    alert('hello')
  }
  return (
    <div className="App">

      <div className="particle_container">
      <Particles className="particles"/>
      </div>

      <div className="sub-container">
        <animated.img style={props} src={BodyMap} className="image" alt="logo" width="400px" height="400px"/>
        <button onClick={handleClick}>1</button>
        <animated.h1 style={props}>
          Chakras
        </animated.h1>
        <AnimatedLogo/>
      </div>
    </div>
  );
}

export default App;
