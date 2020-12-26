import React from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Particles from './components/Particles'
import Muladhara from './components/ChakraOne';
import Svadhisthana from './components/ChakraTwo';
import Manipura from './components/ChakraThree';
import Anahata from './components/ChakraFour';
import Vishuddha from './components/ChakraFive';
import Ajna from  './components/ChakraSix';
import Sahasrara from './components/ChakraSeven';

function App() {
  return (
    <div className="App">
      <div className="particle_container">
        <Particles className="particles"/>
        </div>
      <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Navigation}/>
            <Route  path="/Muladhara" component={Muladhara} />
            <Route  path="/Svadhisthana" component={Svadhisthana} />
            <Route  path="/Manipura" component={Manipura} />
            <Route  path="/Anahata" component={Anahata} />
            <Route  path="/Vishuddha" component={Vishuddha} />
            <Route  path="/Ajna" component={Ajna} />
            <Route  path="/Sahasrara" component={Sahasrara} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
