import React from 'react';

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { AppProvider } from './config/app-context';
import AdminDashboardPage from './screens/dashboard';
import AdminLoginPage from './screens/login';
import AdminRegisterPage from './screens/signup';
import ErrorPage from './components/pages/404ErrorPage';
import FlightsPage from './components/pages/FlightsPage';
import HomePage from './components/pages/HomePage';


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <HomePage/>
          </Route>
          <Route path="/flight" exact>
              <FlightsPage/>
          </Route>
          <Route path="/admin/login" exact>
              <AdminLoginPage/>
          </Route>
          <Route path="/admin/signup" exact>
              <AdminRegisterPage/>
          </Route>
          <Route path="/admin/dashboard" exact>
              <AdminDashboardPage/>
          </Route>
          <Redirect from="/admin" to='/admin/login'/> 
          <Route>
            <ErrorPage/>
          </Route> 
        </Switch>
      </BrowserRouter>
      </AppProvider>
  );
}

export default App;
