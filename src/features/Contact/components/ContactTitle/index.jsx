import React from 'react';
import PropTypes from 'prop-types';
import backgroundImg from './page-top-bg.jpg';
ContactTitle.propTypes = {};

function ContactTitle(props) {
    const recipeTitleStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
    };
    return (
        <div style={recipeTitleStyle} className="recipes__header">
            <h1>Contact</h1>
        </div>
    );
}

export default ContactTitle;
