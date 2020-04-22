import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';




function App() {
  return (
    <div>
   <Route path="/" exact component={HomePage}/>
   <Route path="/logIn" exact component={LoginPage}/>
   <Route path="/SignUp" exact component={SignUpPage}/>
    </div>
  );
}

export default App;
