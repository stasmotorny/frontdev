import React, {Component} from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink, HashRouter } from 'react-router-dom';

class SideBar extends Component {

    constructor (props) {
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu () {
        this.setState({menuOpen: false})
        console.log ('menu', this.state);
    }

    render () {
        return (
            <HashRouter>
                <Menu right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    <NavLink to="/home" className="menu-item" onClick={() => this.closeMenu()}>Home</NavLink>
                    <NavLink to="/gallery" className="menu-item" onClick={() => this.closeMenu()}>Gallery</NavLink>
                    <NavLink to="/about" className="menu-item" onClick={() => this.closeMenu()}>About</NavLink>
                    <NavLink to="/contact" className="menu-item" onClick={() => this.closeMenu()}>Contacts</NavLink>
                </Menu>
            </HashRouter>
        );
    }
};

export default SideBar;