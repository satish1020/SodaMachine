import React from 'react';
import ReactDOM from 'react-dom';
import {SodaMachine} from './Container/SodaMachine';
import Sodamachine from './Container/vendingmachine';
import StopWatch from './Container/StopWatch';

ReactDOM.render(
  <Sodamachine />,
  // <StopWatch />,
  document.getElementById('root')
);
