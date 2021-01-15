import React from 'react';
import PropTypes from 'prop-types';
import backgroundImg from './page-top-bg.jpg';
import Swing from 'react-reveal/Swing';
ContactTitle.propTypes = {};

function ContactTitle(props) {
    const recipeTitleStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
    };
    return (
        <div style={recipeTitleStyle} className="recipes__header">
            <Swing>
                <h1>Contact</h1>
            </Swing>
        </div>
    );
}

export default ContactTitle;
