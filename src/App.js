import React from 'react';

import {Route} from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';




function App() {
  return (
    <div>
   <Route path="/" exact component={HomePage}/>
   <Route path="/SignUp" exact component={SignUpPage}/>
    </div>
  );
}

export default App;
