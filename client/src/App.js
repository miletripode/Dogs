import './App.css';
import React from 'react';
import { Route } from 'react-router';
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import CreatingDog from './components/CreatingDog';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route path='/home' component={Nav}/>
      <Route path='/home' component={Home}/>
      <Route path='/creating' component={CreatingDog} />
    </div>
  );
}

export default App;
