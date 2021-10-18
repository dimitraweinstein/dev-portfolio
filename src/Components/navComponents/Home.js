import React, { Component } from 'react';
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
                                {/* <ul>
                                <p className="list-title">Tech Stack:</p>
                                    <ul>
                                        <li> <p className="list-subtitle">Languages:</p> </li>
                                            <ul>
                                        <li> JavaScript </li>
                                        <li> HTML/CSS </li>
                                            </ul>
                                        <li> <p className="list-subtitle">Frameworks/Libraries:</p> </li>
                                            <ul>
                                        <li> Reactjs </li>
                                        <li> Node </li>
                                        <li> Express </li>
                                            </ul>
                                        <li> <p className="list-subtitle">Databases:</p> </li>
                                            <ul>
                                                <li> PostgreSQL </li>
                                            </ul>
                                        </ul>
                                    </ul> */}
                                </div>
                            <div className="tech-column-2">
                                {/* <ul>
                                    <ul>
                                <li>
                                        <p
                                            className="list-subtitle"
                                            id="tools-titles">Tools:
                                    </p>
                                    </li>
                                            <ul id="tools">
                                                <li> Heroku </li>
                                                <li> Git </li>
                                                <li> GitHub </li>
                                                <li> Netlify </li>
                                                <li> Postman </li>
                                            </ul>
                                    <li>
                                        <p
                                            className="list-subtitle"
                                            id="tools-titles"
                                        >
                                            Dev Practices:</p>
                                    </li>
                                            <ul id="dev-practices">
                                                <li>TDD</li>
                                            </ul>
                                    </ul>
                            </ul>  */}
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