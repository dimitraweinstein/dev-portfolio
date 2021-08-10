import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className = 'header-div'>
                Header
                <Route>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/thecode'>The Code</NavLink>
                    <NavLink to='/connect'>Connect With Me</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                    <NavLink to='/socialmedia'>Social Media</NavLink>
                </Route>
            </div>
        )
    }
 }