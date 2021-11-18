import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './routes'
//import { Router, Route, Switch} from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import { useHistory as history } from "react-router-dom"
import routes from './routes';
import Normal_entry from './Normal_entry';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
