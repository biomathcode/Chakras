import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogTemplate from './Template/BlogTemplate';
import reportWebVitals from './reportWebVitals';
import ChakraOne from './components/ChakraOne';
import ChakraTwo from './components/ChakraTwo';
import ChakraThree from './components/ChakraThree';
import ChakraFour from './components/ChakraFour';
import ChakraFive from './components/ChakraFive';
import ChakraSix from  './components/ChakraSix';
import ChakraSeven from './components/ChakraSeven';

const AppMain = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/chakra" component={BlogTemplate} />
      <Route path="/chakraOne" component={ChakraOne} />
      <Route path="/chakraTwo" component={ChakraTwo} />
      <Route path="/chakraThree" component={ChakraThree} />
      <Route path="/chakraFour" component={ChakraFour} />
      <Route path="/chakraFive" component={ChakraFive} />
      <Route path="/chakraSix" component={ChakraSix} />
      <Route path="/chakraSeven" component={ChakraSeven} />
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
