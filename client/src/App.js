import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import CreatingDog from './components/CreatingDog/CreatingDog';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Layout>
          <Route path='/home' component={Home} />
          <Route path='/creating' component={CreatingDog} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
