import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Contacts,
  Details,
  Footer,
  Home,
  Navbar,
  News,
  NotFoundPage,
} from './components';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details' component={Details} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/news' component={News} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
