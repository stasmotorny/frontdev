import React, {Component} from "react";
import VisibilitySensor from "react-visibility-sensor";
import forSmallScreenSvg from '../../icons/forSmallScreen.svg';

class ForSmallScreen extends Component {
    render (props) {
        return (
            <VisibilitySensor partialVisibility>
                {({isVisible}) =>
                    <img src={forSmallScreenSvg} className={isVisible ? 'visible' : 'invisible'} />
                }
            </VisibilitySensor>
        );
    }
}

export default ForSmallScreen;
