import React, { Component } from "react";
import '../../App.css';
import Counter from "../counter/counter.js";
import Vivus from 'vivus';
import svg from '../../icons/Asset 116.svg';
import ForSmallScreen from '../svg/forSmallScreen.js';

class About extends Component {

    componentDidMount(){
        new Vivus('animation', {duration: 100, file: svg, type: 'sync'}, null)
    }

	render () {
		return (
			<div className="animation-block">
                <div id="animation"></div>
                <ForSmallScreen />
                <h3 className="skillsGroup header3">Languages</h3>
                <div className="skils">
                    <div className="circularBar">
                        <p className="skillName">English</p>
                        <Counter end={75}/>
                    </div>
                    <div className="circularBar">
                        <p className="skillName">French</p>
                        <Counter end={70}/>
                    </div>
                </div>

                <h3 className="skillsGroup header3">Front-end skils</h3>
                <div className="skils">
                    <div className="circularBar">
                        <p className="skillName">HTML 5</p>
                        <Counter end={80}/>
                    </div>
                    <div className="circularBar">
                        <p className="skillName">CSS 3</p>
                        <Counter end={85}/>
                    </div>
                    <div className="circularBar">
                        <p className="skillName">JavaScript</p>
                        <Counter end={75}/>
                    </div>
                    <div className="circularBar">
                        <p className="skillName">React</p>
                        <Counter end={80}/>
                    </div>
                    <div className="circularBar last">
                        <p className="skillName">Redux</p>
                        <Counter end={70}/>
                    </div>
                </div>
            </div>
		);
	}
}

export default About;