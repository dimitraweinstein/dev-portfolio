import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from '../src/Header.js';
import Home from '../src/navComponents/Home.js';
import AboutMe from '../src/navComponents/AboutMe.js';
import ConnectWithMe from '../src/navComponents/ConnectWithMe.js';
import TheCode from '../src/navComponents/TheCode.js';
import Resume from '../src/navComponents/Resume.js';
import SocialMedia from '../src/navComponents/SocialMedia';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Header />
          <Switch>
            <Route exact path = '/' render = {(routerProps) =>
              <Home {...routerProps} />}
            />
            <Route exact path = '/aboutme' render = {(routerProps) =>
              <AboutMe {...routerProps} />}
            />
            <Route exact path ='/thecode' render = {(routerProps) =>
            <TheCode {...routerProps} />} 
            />
            <Route exact path='/connect' render={(routerProps) =>
              <ConnectWithMe {...routerProps} />}
            />
            <Route exact path='/resume' render={(routerProps) =>
              <Resume {...routerProps} />}
            />
            <Route exact path='/socialmedia' render={(routerProps) =>
              <SocialMedia {...routerProps} />}
              />
          </Switch>
        </Router>
      </div>
    )
  }
}
;
