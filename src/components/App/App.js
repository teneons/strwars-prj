import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Planets from '../Planets/Planets';
import Starships from '../Starships/Starships';
import Persons from '../Persons/Persons';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
      <div className='d-flex flex-column align-items-center'>
        <Route path='/' render={()=><h1>Star Wars prj.</h1>} exact={true}/>
        <Route path='/planets' component={Planets} />
        <Route path='/sships' component={Starships} />
        <Route path='/persons' component={Persons} />
        <Route path='/persons/:id' component={Persons} />
      </div>
      </Router> 
    </div>
  );
}

export default App;
