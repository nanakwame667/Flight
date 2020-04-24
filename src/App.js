import React from 'react';

import {Route,Switch} from 'react-router-dom';

import NavBar from '../src/components/forms/home/NavBar';

import FlightsPage from './components/pages/FlightsPage';
import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';



function App() {
  return (
    <div>
    <NavBar/>
    <Switch>
   <Route path="/" exact component={HomePage}/>
   <Route path="/SignUp" exact component={SignUpPage}/>
   <Route path="/flights" exact component={FlightsPage}/>
   </Switch>
    </div>
  );
}

export default App;
