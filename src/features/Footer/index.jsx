import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
Footer.propTypes = {};

function Footer(props) {
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
    const navbarList = [
        {
            id: 1,
            label: 'home',
            path: '/',
        },
        {
            id: 2,
            label: 'recipies',
            path: '/recipies',
        },
        {
            id: 3,
            label: 'recipe detail',
            path: '/recipedetail',
        },
        {
            id: 4,
            label: 'about',
            path: '/about',
        },
        {
            id: 5,
            label: 'contact',
            path: '/contact',
        },
    ];
    const footerContent = {
        content: 'Copyright © 2020 All rights reserved | This template is made with  by Colorlib',
    };

    return (
        <footer className="footer">
            <ul className="footer__list">
                {iconList.map((item) => (
                    <li key={item.id}>{item.icon}</li>
                ))}
            </ul>
            <p className="footer__copyright">{footerContent.content}</p>
        </footer>
    );
}

export default Footer;
