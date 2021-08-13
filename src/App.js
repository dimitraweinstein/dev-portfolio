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
import { Mobile } from './Components/mobile/component.jsx';
// import { TabletMobilePortrait } from './Components/tablet-mobile/component.jsx';
import { Laptop } from './Components/laptop/component.jsx';
// import { DesktopLaptopPortrait } from './Components/desktop/component.jsx';
// import { BigScreen } from './Components/big-screen/component.jsx';

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
    maxDeviceWidth: 1223
  });
  const isDesktopOrLaptop = useMediaQuery({
    minDeviceWidth: 1224
  });
  //   const isMobileOrTabletPortrait = useMediaQuery({
  //     maxDeviceWidth: 1224,
  //     orientation: 'portrait'
  // });
  // const isTabletDevice = useMediaQuery({
  //   minDeviceWidth: 768,
  //   maxDeviceWidth: 1023
  // });

  // const isDesktopOrLaptopPortrait = useMediaQuery({
  //   minDeviceWidth: 1224,
  //   orientation: 'portrait'
  // });
  // const isBigScreen = useMediaQuery({
  //   minDeviceWidth: 1824
  // });
  // const isPortrait = useMediaQuery({
  //   query: "(orientation: portrait)"
  // });

    return (
      <div >

        {isMobileOrTablet && <Mobile> <AppRouter /> </Mobile>}
        { isDesktopOrLaptop && <Laptop> <AppRouter/> </Laptop>}
      {/* { isMobileOrTabletPortrait &&  <TabletMobilePortrait> <AppRouter/> </TabletMobilePortrait>}
      { isDesktopOrLaptopPortrait && <DesktopLaptopPortrait> <AppRouter/> </DesktopLaptopPortrait> } */}
        {/* {isBigScreen && <BigScreen> <AppRouter/> </BigScreen>} */}
        {/* {isPortrait && <Portrait />} */}
        
      </div>
    )
  }
;
