import React, {Component} from "react";
import {easeQuadInOut} from "d3-ease";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import AnimatedProgressProvider from "../../AnimatedProgressProvider";

class Counter extends Component {
    render (props) {
        return (
            <div className="RoundBar">
                <VisibilitySensor>
                    {({isVisible}) => {
                        const percentage = isVisible ? this.props.end : 0;
                        return (
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={percentage}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({pathTransition: "none"})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        )
                    }}
                </VisibilitySensor>
            </div>
        )
    }
}

export default Counter;