import React from 'react';

import backgroundImg from './page-top-bg.jpg';
AboutTitle.propTypes = {};

function AboutTitle({ aboutTitle }) {
    const aboutTitleStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
    };
    return (
        <div style={aboutTitleStyle} className="recipes__header">
            <h1>{aboutTitle}</h1>
        </div>
    );
}

export default AboutTitle;
