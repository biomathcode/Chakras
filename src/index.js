import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import ChakraOne from './components/ChakraOne';
import ChakraTwo from './components/ChakraTwo';
import ChakraThree from './components/ChakraThree';
import ChakraFour from './components/ChakraFour';
import ChakraFive from './components/ChakraFive';
import ChakraSix from  './components/ChakraSix';
import ChakraSeven from './components/ChakraSeven';
import NoMatch from './components/NoMatch';
const AppMain = () => (
  <Router basename="/">
    <Switch>
      <Route path="/" exact component={App} />
      <Route  path="/Muladhara" component={ChakraOne} />
      <Route  path="/Svadhisthana" component={ChakraTwo} />
      <Route  path="/Manipura" component={ChakraThree} />
      <Route  path="/Anahata" component={ChakraFour} />
      <Route  path="/Vishuddha" component={ChakraFive} />
      <Route  path="/Ajna" component={ChakraSix} />
      <Route  path="/Sahasrara" component={ChakraSeven} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
)
ReactDOM.render(
  <React.StrictMode>
    <AppMain/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
