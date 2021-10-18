import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import headerDevLogo from '../../src/images/Dev Logo 5_header.png';

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                <Route>
                    <img className="header-logo" alt="header logo" src={headerDevLogo} />
                    <div className="nav-links">
                        <NavLink to='/'>About Me</NavLink>
                        <NavLink to='/thecode'>GitHub</NavLink>
                        <NavLink to='/resume'>Resume</NavLink>
                        <NavLink to='/connect'>Past & Current Projects</NavLink>
                        <NavLink to='/socialmedia'>Social Media</NavLink>
                    </div>
                </Route>
            </div>
        )
    }
}