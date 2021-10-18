import React, { Component } from 'react';
import TechStackListOne from '../Display/TechStackListOne';
import TechStackListTwo from '../Display/TechStackListTwo';
import profileImage from '../../images/Profile_Image.jpeg';
// import devLogo from '../../images/Dev Logo 5.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <main className="main-area">
                    <div className="pic-stack">
                        <img className="bio-pic" alt="profile" src={profileImage} />
                        <div className="tech-stack-div">
                            <div className="tech-column-1">
                                <TechStackListOne />
                                </div>
                            <div className="tech-column-2">
                                <TechStackListTwo />
                                </div>
                        </div>
                    </div>
                    <div className="bio-text">
                        <div className = "p-div">
                            <p>
                                Software Developer who is a strategic thinker with exceptionally high EQ, that is always thinking ahead and never running out of ideas, with a background in education and visual art.
                            </p>
                            <p>
                                With experience building strong communities among diverse groups, I am interested in creating apps and supporting organizations with a human-centered, mission-driven mindset. Passionate about developing and providing solutions to everyday problems, I would like to use my cumulative experience to help people achieve their goals, give access to resources, and effect positive change in their local communities and abroad.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
 }