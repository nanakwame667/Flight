import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';

import { AppProvider } from './config/app-context';
import AdminDashboardPage from './screens/dashboard';
import AdminLoginPage from './screens/login';
import AdminRegisterPage from './screens/signup';
import SearchResults from './components/forms/SearchResults';
import FlightsPage from './components/pages/FlightsPage';
import HomePage from './components/pages/HomePage';
import SignUpPage from './components/pages/SignUpPage';



function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/SignUp" exact component={SignUpPage}/>
        <Route path="/flights" exact component={FlightsPage}/>
        <Route path="/flights/Search" exact component={SearchResults}/>
        <Route path="/admin/signup" exact component={AdminRegisterPage}/> 
        <Route path="/admin/dashboard" exact component={AdminDashboardPage}/>
        <Route path="/admin/login" exact component={AdminLoginPage}/> 
        <Redirect from="/admin" to='/admin/login'/> 
      </Switch>
    </AppProvider>
  );
}

export default App;
