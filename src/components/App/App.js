import React from 'react';

import Header from '../Header/Header';
import CardBox from '../CardBox/CardBox';
import Persons from '../Persons/Persons';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='d-flex flex-column align-items-center'>
        <CardBox />
        <Persons />
      </div>
    </div>
  );
}

export default App;
