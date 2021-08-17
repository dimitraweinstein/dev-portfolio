import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from '../src/Components/Header.js';
import Home from '../src/Components/navComponents/Home.js';
import ConnectWithMe from '../src/Components/navComponents/ConnectWithMe.js';
import TheCode from '../src/Components/navComponents/TheCode.js';
import Resume from '../src/Components/navComponents/Resume.js';
import SocialMedia from '../src/Components/navComponents/SocialMedia';
import './App.css';
import { MobileOrTablet } from './Components/mobile/component.jsx';
import { LaptopOrDesktop } from './Components/laptop/component.jsx';

const AppRouter = () => {
  return (
     <Router>
          <Header />
          <Switch>
            <Route path="/" exact component = { Home } />
            <Route path="/connect" exact component={ ConnectWithMe } />
            <Route path="/thecode" exact component={TheCode} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/socialmedia" exact component={ SocialMedia } />
          </Switch>
        </Router>
  )
 }

export default function App () {
  const isMobileOrTablet = useMediaQuery({
    maxDeviceWidth: 1223,
  });

  const isPortrait = useMediaQuery({
    orientation: 'portrait'
  });

   const isLandscape = useMediaQuery({
    orientation: 'landscape'
  });

  // const isDesktopOrLaptop = useMediaQuery({
  //   minDeviceWidth: 1224
  // });

  const isRetina = useMediaQuery({
    resolution: 2
  });

    return (
      <div >

        { isMobileOrTablet ? <MobileOrTablet> <AppRouter /> </MobileOrTablet> : <LaptopOrDesktop> <AppRouter/> </LaptopOrDesktop> }
        {/* { isDesktopOrLaptop && <LaptopOrDesktop> <AppRouter/> </LaptopOrDesktop> } */}
        { isRetina }
        {isPortrait ?? isLandscape}
        
      </div>
    )
  }
;
