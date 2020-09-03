import React from 'react';

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
