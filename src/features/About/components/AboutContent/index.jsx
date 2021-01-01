import React from 'react';
import PropTypes from 'prop-types';

AboutContent.propTypes = {};

function AboutContent({ aboutContent, url }) {
    return (
        <div className="about__introduce">
            <div className="about__desc">
                <h3> About our great team</h3>
                <p>{aboutContent}</p>
                <button className="about__btn">Read more</button>
            </div>
            <div className="about__imgWrapper">
                <img src={url} alt="our__team" />
            </div>
        </div>
    );
}

export default AboutContent;
