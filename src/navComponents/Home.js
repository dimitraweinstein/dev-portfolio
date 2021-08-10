import React, { Component } from 'react';
import profileImage from '../images/Profile_Image.jpeg';
import devLogo from '../images/Dev Logo 5.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <main className="main-area">
                    <img className="bio-pic" alt="profile" src={profileImage} />
                    <div className="bio-text">
                        <img className="dev-logo" alt="logo" src={devLogo} />
                        <div className = "p-div">
                            <p>
                                A fast visual and tactile lifelong learner that takes practical approaches to write readable code for humans AND computers, who loves working and collaborating with people in team-oriented environments, with a BFA from Savannah College of Art & Design (SCAD) which shows a passion and keen eye for art & design.</p>
                            <p>
                                I am interested in creating apps and supporting companies, startups, etc. that have a mission-driven mindset to effect positive change in their local communities and abroad. </p>

                            <p>
                                I am passionate about developing and providing solutions to everyday problems, and finding ways to give access to resources for those who are marginalized, overlooked, and discounted. Using my coding experience to help people achieve their goals would be a dream come true.</p>

                            <p>
                                In my background as an art teacher, I have had the privilege of building entire high school visual art education curricula as well as creating and maintaining an art supply inventory for the art department, as well as securing funds and donations for needed equipment. </p>

                            <p>
                                Finally, I am a Portland native who is passionate about helping young children learn to read. I am an avid reader myself and love all things history and visual art. You can easily find me in a museum or library/bookstore trying to ingest all the knowledge I can get my hands on, in the park with my family and our dog, enjoying or creating artwork of some kind, or hiking while at our cabin on Mt. Hood, and enjoying all the beauty that is Oregon.</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
 }