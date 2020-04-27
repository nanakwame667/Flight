import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';

import FlightsPage from './components/pages/FlightsPage';
import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';
import AdminLoginPage from './screens/login';
import AdminRegisterPage from './screens/signup';
import AdminDashboardPage from './screens/dashboard';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/SignUp" exact component={SignUpPage}/>
        <Route path="/flights" exact component={FlightsPage}/>
        <Route path="/admin/signup" exact component={AdminRegisterPage}/> 
        <Route path="/admin/dashboard" exact component={AdminDashboardPage}/>
        <Route path="/admin/login" exact component={AdminLoginPage}/> 
        <Redirect from="/admin" to='/admin/login'/> 
    </Switch>
    </div>
  );
}

export default App;
