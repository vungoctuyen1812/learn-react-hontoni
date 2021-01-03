import React from 'react';
import PropTypes from 'prop-types';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ContactIcon from '../ContactIcon';
ContactDesc.propTypes = {};

function ContactDesc({ contactData, iconList }) {
    return (
        <div className="contact__desc">
            <ContactSupportIcon></ContactSupportIcon>
            {contactData.map((item) => (
                <div key={item.id} className="contact__desc--item">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                </div>
            ))}
            <ContactIcon iconList={iconList} />
        </div>
    );
}

export default ContactDesc;
