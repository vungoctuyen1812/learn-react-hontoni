import { Button } from '@material-ui/core';
import React from 'react';
import img from './images/hero-image.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './styles.scss';
HeroImage.propTypes = {};

function HeroImage(props) {
    return (
        <div className="hero__container">
            <h5 className="hero__subtitle">Enjoy your healthy Vietnamese Food</h5>
            <h2 className="hero__title">Miss Vietnam</h2>

            <p className="hero__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quidem consectetur quod impedit,
                nulla laboriosam quo vitae alias odit
            </p>
            <button className="hero__btn">
                Explore Now
                <ArrowForwardIosIcon classname="hero__btn--icon" />
                <ArrowForwardIosIcon classname="hero__btn--icon" />
                <ArrowForwardIosIcon classname="hero__btn--icon" />
            </button>
        </div>
    );
}

export default HeroImage;
