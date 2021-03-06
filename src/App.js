import React from 'react';

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { AppProvider } from './config/app-context';
import AdminDashboardPage from './screens/dashboard';
import AdminLoginPage from './screens/login';
import AdminRegisterPage from './screens/signup';
import FlightSearch from './components/forms/FlightSearch';
import Reservations from './components/forms/Reservations';
import ErrorPage from './components/pages/404ErrorPage';
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
              <FlightSearch/>
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
          <Route path="/reservations" exact>
          <Reservations/>
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
