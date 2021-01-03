import React from 'react';
import PropTypes from 'prop-types';

ContactIcon.propTypes = {};

function ContactIcon({ iconList }) {
    return (
        <div>
            <ul className="contact__desc--icon">
                {iconList.map((item) => (
                    <li key={item.id}>{item.icon}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContactIcon;
