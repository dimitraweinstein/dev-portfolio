import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
            <Route path="/" exact component = { Home } />
            <Route path="/aboutme" exact component={ AboutMe } />
            <Route path="/connect" exact component={ ConnectWithMe } />
            <Route path="/thecode" exact component={TheCode} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/socialmedia" exact component={ SocialMedia } />
          </Switch>
        </Router>
      </div>
    )
  }
}
;
