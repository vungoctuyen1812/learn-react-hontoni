import React from 'react';
import PropTypes from 'prop-types';

ContactForm.propTypes = {};

function ContactForm(props) {
    return (
        <React.Fragment>
            <form className="contact__form">
                <div className="contact__form--user">
                    <input type="text" placeholder="Name" className="contact__form--name" />
                    <input type="text" placeholder="Email" className="contact__form--email" />
                </div>
                <div className="contact__form--subject">
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="contact__form--mess">
                    <textarea name="subject" id="subject" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <div className="contact__form--btn">
                    <button>Send</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;
