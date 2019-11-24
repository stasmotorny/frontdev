import React, { Component } from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import GalleryPage from './components/pages/gallerypage';
import SideBar from './components/burger/burger';
import Header from './components/header/header';
import Footer from './components/footer/footer'

class App extends Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <div className="App" id="App">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <div id="page-wrap">
              <HashRouter>
                 <div>
                    <Header />
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/gallery" component={GalleryPage}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                    <Footer />
                 </div>
              </HashRouter>
          </div>
      </div>
    );
  }
}

export default App;
