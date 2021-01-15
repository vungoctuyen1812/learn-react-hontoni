import React from 'react';
import PropTypes from 'prop-types';
import Rotate from 'react-reveal/Rotate';
ContactIcon.propTypes = {};

function ContactIcon({ iconList }) {
    return (
        <div>
            <ul className="contact__desc--icon">
                {iconList.map((item) => (
                    <Rotate left cascade>
                        <li key={item.id}>{item.icon}</li>
                    </Rotate>
                ))}
            </ul>
        </div>
    );
}

export default ContactIcon;
