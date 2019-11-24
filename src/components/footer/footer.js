import {NavLink} from "react-router-dom";
import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="sitefooter">
                <div className="sitefooter--socials">
                    <p className="copyrights">© 2018 UI43 - Free Templates</p>
                    <ul className="socials--list">
                        <li className="socials--point"><a href="http://behance.com" className="sitefooter--socials__behance social--link"></a></li>
                        <li className="socials--point"><a href="http://ball.com" className="sitefooter--socials__ball social--link"></a></li>
                        <li className="socials--point"><a href="http://linkedin.com" className="sitefooter--socials__linked social--link"></a></li>
                        <li className="socials--point"><a href="http://fb.com" className="sitefooter--socials__fb social--link"></a></li>
                        <li className="socials--point"><a href="http://instagram.com" className="sitefooter--socials__insta social--link"></a></li>
                        <li className="socials--point"><a href="http://twitter.com" className="sitefooter--socials__twitter social--link"></a></li>
                    </ul>
                </div>
                <div className="footernavigation">
                    <ul className="footernavigation--list">
                        <li className="footernavigation--list__point"><NavLink to="/home" className="footernavigation--list__link">Home</NavLink></li>
                        <li className="footernavigation--list__point"><NavLink to="/gallery" className="footernavigation--list__link">Gallery</NavLink></li>
                        <li className="footernavigation--list__point"><NavLink to="/about" className="footernavigation--list__link">About</NavLink></li>
                        <li className="footernavigation--list__point"><NavLink to="/contact" className="footernavigation--list__link">Contacts</NavLink></li>
                    </ul>
                    <NavLink to="/contact" className="footernavigation--btn">HIRE ME</NavLink>
                </div>
            </footer>
        )
    }
}

export default Footer;
