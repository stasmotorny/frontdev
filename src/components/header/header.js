import {NavLink} from "react-router-dom";
import React, { Component } from "react";
import logo from '../../icons/logo.png';
import resume from '../../icons/resume.pdf';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="header--top">
                    <div className="header--logo">
                        <div className="logo">
                            <NavLink to="/home"><img src={logo} alt="" className="logo--img"/></NavLink>
                        </div>
                        <div className="description">
                            <p className="my_name">Stas Motorny</p>
                            <p className="description_occupation">Front-end developer</p>
                        </div>
                    </div>
                    <div className="navigation">
                        <ul className="header--Navigation">
                            <li className="header--Navigation__point"><NavLink to="/home" className="header--Navigation__link">Home</NavLink></li>
                            <li className="header--Navigation__point"><NavLink to="/gallery" className="header--Navigation__link">Gallery</NavLink></li>
                            <li className="header--Navigation__point"><NavLink to="/about" className="header--Navigation__link">About</NavLink></li>
                            <li className="header--Navigation__point"><NavLink to="/contact" className="header--Navigation__link">Contacts</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="header--bottom">
                    <div className="about-me">
                        <div className="aboutme--shortinfo">
                            <p className="aboutme--shortinfo__greetings">Hello, I'm</p>
                            <p className="aboutme--shortinfo__name">Stas Motorny</p>
                            <p className="aboutme--shortinfo__occupation">Front-end developer</p>
                        </div>
                        <div className="about-me--socials">
                            <a href="https://www.behance.net/stasmotorny" className="about-me--socials__behance social--link"></a>
                            <a href="https://dribbble.com/stassi4ek" className="about-me--socials__ball social--link"></a>
                            <a href="https://www.linkedin.com/in/stanislav-motorny-441928198/" className="about-me--socials__linked social--link"></a>
                            <a href="https://www.facebook.com/stasmotorny" className="about-me--socials__fb social--link"></a>
                            <a href="https://www.instagram.com/stasmotorny/" className="about-me--socials__insta social--link"></a>
                            <a href="https://twitter.com/stasmotorny" className="about-me--socials__twitter social--link"></a>
                        </div>
                        <div className="btns">
                            <NavLink to="/contact" className="btns--hiremeresumelink">HIRE ME</NavLink>
                            <a href={resume} target="_blank" className="btns--hiremeresumelink">SEE MY RESUME</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;