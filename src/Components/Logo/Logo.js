import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain_logo from './brain_logo.png';

const Logo = () => {
    return(
        <div className="ml4">
            <Tilt className="Tilt b4 shadow-5 pa3 ma2 br3" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img src={brain_logo} alt="Logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;