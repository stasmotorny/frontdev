import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Gallery from './components/pages/gallery';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <header className="App-header">
                <div className="header--top">
                    <div className="header--logo">
                        <div className="logo"></div>
                        <div className="description">
                            <p className="my_name">Stas Motorny</p>
                            <p className="description_occupation">Front-end developer</p>
                        </div>
                    </div>
                    <div className="navigation">
                      <ul className="header--Navigation">
                        <li className="header--Navigation__point"><NavLink to="/home" className="header--Navigation__link">Home</NavLink></li>
                        <li className="header--Navigation__point"><NavLink to="/gallery" className="header--Navigation__link">Gallery</NavLink></li>
                        <li className="header--Navigation__point"><NavLink to="/about" className="header--Navigation__link">About me</NavLink></li>
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
                            <a href="http://behance.com" className="about-me--socials__behance"></a>
                            <a href="http://ball.com" className="about-me--socials__ball"></a>
                            <a href="http://linkedin.com" className="about-me--socials__linked"></a>
                            <a href="http://fb.com" className="about-me--socials__fb"></a>
                            <a href="http://instagram.com" className="about-me--socials__insta"></a>
                            <a href="http://twitter.com" className="about-me--socials__twitter"></a>
                        </div>
                        <div className="btns">
                            <button className="btns--hiremeresume">HIRE ME</button>
                            <button className="btns--hiremeresume">SEE MY RESUME</button>
                        </div>
                    </div>
                    <div className="header--image">
                        <img src="" alt=""/>
                    </div>
                </div>
            </header>
            <div className="content">
                <Route path="/home" component={Home}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
              <footer className="sitefooter">
                  <div className="sitefooter--socials">
                      <p className="copyrights">© 2018 UI43 - Free Templates</p>
                      <ul className="socials--list">
                          <li className="socials--point"><a href="http://behance.com" className="sitefooter--socials__behance"></a></li>
                          <li className="socials--point"><a href="http://ball.com" className="sitefooter--socials__ball"></a></li>
                          <li className="socials--point"><a href="http://linkedin.com" className="sitefooter--socials__linked"></a></li>
                          <li className="socials--point"><a href="http://fb.com" className="sitefooter--socials__fb"></a></li>
                          <li className="socials--point"><a href="http://instagram.com" className="sitefooter--socials__insta"></a></li>
                          <li className="socials--point"><a href="http://twitter.com" className="sitefooter--socials__twitter"></a></li>
                      </ul>
                  </div>
                  <div className="footernavigation">
                      <ul className="footernavigation--list">
                          <li className="footernavigation--list__point"><NavLink to="/home" className="footernavigation--list__link">Home</NavLink></li>
                          <li className="footernavigation--list__point"><NavLink to="/gallery" className="footernavigation--list__link">Gallery</NavLink></li>
                          <li className="footernavigation--list__point"><NavLink to="/about" className="footernavigation--list__link">About me</NavLink></li>
                          <li className="footernavigation--list__point"><NavLink to="/contact" className="footernavigation--list__link">Contacts</NavLink></li>
                      </ul>
                      <button className="footernavigation--btn">HIRE ME</button>
                  </div>
              </footer>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
