import React, { Component } from "react";
import htmlIcon from '../../icons/html.png';
import cssIcon from '../../icons/CSS-3.png';
import jsIcon from '../../icons/js.png';
import reactIcon from '../../icons/react.png';
import reduxIcon from '../../icons/redux.png';
import psIcon from '../../icons/ps.png';
import aiIcon from '../../icons/ai.png';
import zeplinIcon from '../../icons/zeplin.png';
import gitIcon from '../../icons/git-icon-svg.png';
import engIcon from '../../icons/united-kingdom-flag.png';
import frenchIcon from '../../icons/flag-of-france.png';
import ukrainianIcon from '../../icons/flag-of-ukraine.png';
import rusIcon from '../../icons/flag-of-russia.png';
import Gallery from '../gallery/gallery';

class Home extends Component {
	render () {
		return (
			<div>
				<p className="description--text">Hi, welcome to my page. My name is Stas Motornyi I am junior front-end developer with one year of experience in producing quality responsive websites with exceptional user experience. I admire programming, because I can create something new, because of interesting tasks looks like puzzles that you can decide in your own way.</p>
				<div className="programmigskils">
					<h3>Programming languages/frameworks/etc:</h3>
					<div className="programmigskils--container">
						<img src={htmlIcon} className="programmigskils--icon icon" alt=""/>
						<img src={cssIcon} className="programmigskils--icon icon" alt=""/>
						<img src={jsIcon} className="programmigskils--icon icon" alt=""/>
						<img src={reactIcon} className="programmigskils--icon icon" alt=""/>
						<img src={reduxIcon} className="programmigskils--icon icon" alt=""/>
					</div>
				</div>
				<h3>Additional skills:</h3>
				<div className="additionalskils">
					<div className="additionalskils--programs">
						<img src={psIcon} className="additionalskils--programs__icon icon" alt=""/>
						<img src={aiIcon} className="additionalskils--programs__icon icon" alt=""/>
						<img src={zeplinIcon} className="additionalskils--programs__icon icon" alt=""/>
						<img src={gitIcon} className="additionalskils--programs__icon icon" alt=""/>
					</div>
					<div className="additionalskils--languages">
						<div className="additionalskils--languages__container">
							<img src={engIcon} className="additionalskils--languages__icon icon" alt=""/>
							<p className="additionalskils--languages__name">English</p>
						</div>
						<div className="additionalskils--languages__container">
							<img src={frenchIcon} className="additionalskils--languages__icon icon" alt=""/>
							<p className="additionalskils--languages__name">French</p>
						</div>
						<div className="additionalskils--languages__container">
							<img src={ukrainianIcon} className="additionalskils--languages__icon icon" alt=""/>
							<p className="additionalskils--languages__name">Ukrainian</p>
						</div>
						<div className="additionalskils--languages__container">
							<img src={rusIcon} className="additionalskils--languages__icon icon" alt=""/>
							<p className="additionalskils--languages__name">Russian</p>
						</div>
					</div>
				</div>
				<div className="gallery--container">
					<h3>Gallery:</h3>
					<Gallery />
				</div>
			</div>
		);
	}
}

export default Home;