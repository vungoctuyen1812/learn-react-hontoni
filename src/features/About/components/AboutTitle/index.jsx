import React from 'react';
import Swing from 'react-reveal/Swing';
import backgroundImg from './page-top-bg.jpg';
AboutTitle.propTypes = {};

function AboutTitle({ aboutTitle }) {
    const aboutTitleStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
    };
    return (
        <div style={aboutTitleStyle} className="recipes__header">
            <Swing>
                <h1>{aboutTitle}</h1>
            </Swing>
        </div>
    );
}

export default AboutTitle;
