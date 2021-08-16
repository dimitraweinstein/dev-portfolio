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
                            <ul>Tech Stack:
                                <ul>
                                    <li> Languages: </li>
                                        <ul>
                                            <li> JavaScript, HTML/CSS </li>
                                        </ul>
                                    <li> Frameworks/Libraries: </li>
                                        <ul>
                                            <li> Reactjs, Node, Express </li>
                                        </ul>
                                    <li> Databases: </li>
                                        <ul>
                                            <li> PostgreSQL </li>
                                        </ul>
                                    <li> Tools: </li>
                                        <ul>
                                        <li> Heroku </li>
                                        <li> Git </li>
                                        <li> GitHub </li>
                                        <li> Netlify </li>
                                        <li> Postman </li>
                                    </ul>
                                    <li> Dev Practices: </li>
                                    <ul>
                                        <li>TDD</li>
                                        </ul>
                                </ul>
                             </ul>
                        </div>
                    </div>
                    <div className="bio-text">
                        <div className = "p-div">
                            <p>
                                A fast visual and tactile learner that takes practical approaches to write readable code for humans AND computers, loves manipulating data and has a keen eye for art & design.</p>
                            <p>
                                Interested in creating apps and supporting organizations with a mission-driven mindset, I am passionate about developing and providing solutions to everyday problems. I would like to use my coding experience to help people achieve their goals, give access to resources, and to effect positive change in their local communities and abroad. </p>
                            <p>
                                Finally, I am a Portland native and among my many passions is helping young children learn to read. I am an avid reader myself and enjoy historical fiction and fantasy. You can easily find me in a museum or library/bookstore trying to ingest all the knowledge I can get my hands on, in the park with my family and our dog, enjoying or creating artwork of some kind, or hiking while at our cabin on Mt. Hood, and enjoying all the beauty that is Oregon.</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
 }