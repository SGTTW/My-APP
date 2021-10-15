import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HandlingEvents from './HandlingEvents';
import SetState from './SetState';
import Mosh from "./Mosh"



ReactDOM.render(
  <div>
    <Mosh />,
    <React.StrictMode>,<SetState />,
      <App />, <HandlingEvents />, 
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
