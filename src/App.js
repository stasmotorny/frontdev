import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter> 
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
              <div className="navigation">
                <ul className="header">
                  <li><NavLink to="/home">Home</NavLink></li>
                  <li><NavLink to="/gallery">Gallery</NavLink></li>
                  <li><NavLink to="/about">About me</NavLink></li>
                  <li><NavLink to="/contact">Contacts</NavLink></li>
                </ul>
                <div className="content">
                  <Route path="/home" component={Home}/>
                  <Route path="/gallery" component={Gallery}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                </div>
              </div>
          </header>  
        </HashRouter>
      </div>
    );
  }
}

export default App;
