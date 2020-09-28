import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import Header from '../Header/Header';
import Planets from '../Planets/Planets';
import Starships from '../Starships/Starships';
import Persons from '../Persons/Persons';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='d-flex flex-column align-items-center'>
        <Planets />
        <Starships />
        <Persons />
      </div>
    </div>
  );
}

export default App;
