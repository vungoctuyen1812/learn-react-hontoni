import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactDesc from './components/ContactDesc';
import './styles.scss';
import ContactTitle from './components/ContactTitle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactIcon from './components/ContactIcon';
Contact.propTypes = {};

function Contact(props) {
    const iconList = [
        {
            id: 0,
            icon: <FacebookIcon />,
        },
        {
            id: 1,
            icon: <InstagramIcon />,
        },
        {
            id: 2,
            icon: <TwitterIcon />,
        },
        {
            id: 3,
            icon: <PinterestIcon />,
        },
        {
            id: 4,
            icon: <LinkedInIcon />,
        },
        {
            id: 5,
            icon: <GitHubIcon />,
        },
    ];
    const contactData = [
        {
            id: 1,
            title: 'Address',
            content: '481 Creekside Lane Avila Beach, CA 93424',
        },
        {
            id: 2,
            title: 'Phone',
            content: '+53 345 7953 32453',
        },
        {
            id: 3,
            title: 'Fax',
            content: '+53 345 7557 822112',
        },
        {
            id: 4,
            title: 'Email',
            content: 'yourmail@gmail.com',
        },
    ];
    return (
        <React.Fragment>
            <ContactTitle></ContactTitle>
            <div className="contact__container">
                <h2 className="contact__title">Leave a comment</h2>
                <div className="contact__content--wrapper">
                    <ContactForm />
                    <ContactDesc contactData={contactData} iconList={iconList} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
