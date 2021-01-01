import React from 'react';
import PropTypes from 'prop-types';
import AboutTitle from './components/AboutTitle';
import AboutContent from './components/AboutContent';
import './styles.scss';
About.propTypes = {};

function About(props) {
    const aboutData = {
        title: 'About',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magnam sequi totam mollitia est expedita reprehenderit aut at. Vel laborum, iure molestiae sunt voluptates fuga laboriosam necessitatibus perspiciatis cupiditate, aperiam facilis, eum nemo odit error enim deserunt? Facere ex esse quasi in, consectetur ipsa. Placeat consequuntur ipsam recusandae vero corporis aperiam unde quibusdam earum voluptates? Ut quod officia quos eveniet maxime ea repellat nobis, ipsum delectus voluptatibus dolorum vel quo, aspernatur velit eum quibusdam animi excepturi. Illum alias, iure exercitationem laborum aliquid iste porro quo quia nemo libero itaque, odio eum sequi maxime reiciendis, laboriosam et quod tempora expedita tempore!',

        url:
            'https://images.unsplash.com/photo-1558227901-87eb8922813f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=80',
    };
    return (
        <div>
            <AboutTitle aboutTitle={aboutData.title} />
            <AboutContent aboutContent={aboutData.content} url={aboutData.url} />
        </div>
    );
}

export default About;
