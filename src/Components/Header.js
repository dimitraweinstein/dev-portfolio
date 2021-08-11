import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import headerDevLogo from '../../src/images/Dev_Logo_W2.png';

export default class Header extends Component {
    render() {
        return (
            <div className = 'header-div'>
                <Route>
                    <img className="header-logo" alt="header logo" src={headerDevLogo} />
                    {/* <div className="nav-links"> */}
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/thecode'>The Code</NavLink>
                        <NavLink to='/connect'>Connect With Me</NavLink>
                        <NavLink to='/resume'>Resume</NavLink>
                        <NavLink to='/socialmedia'>Social Media</NavLink>
                    {/* </div> */}
                </Route>
            </div>
        )
    }
 }