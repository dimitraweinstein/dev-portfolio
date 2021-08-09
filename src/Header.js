import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className = 'header-div'>
                Header
                <Link to='/'>Home</Link>
                <Link to='/aboutme'>About Me</Link>
                <Link to='/thecode'>The Code</Link>
                <Link to='/connect'>Connect With Me</Link>
                <Link to='/resume'>Resume</Link>
                <Link to = '/socialmedia'>Social Media</Link>
            </div>
        )
    }
 }