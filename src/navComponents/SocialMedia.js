import React, { Component } from 'react';

export default class SocialMedia extends Component {
    render() {
        return (
            <div>
                <h3>Social Media</h3>
                <div>
                    <div>
                        <a href = "https://www.linkedin.com/in/dimitraweinstein/">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div>
                        <a href = "http://dubscode2life.blog/">
                            <span>Blog</span>
                        </a>
                    </div>
                    <div>
                        <a href = "https://www.instagram.com/dubscode2life/">
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div>
                        <a href = "https://twitter.com/DubsCodes">
                            <span>Follow me @DubsCodes!</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
 }