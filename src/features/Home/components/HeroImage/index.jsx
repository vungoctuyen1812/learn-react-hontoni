import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import './styles.scss';
HeroImage.propTypes = {};

function HeroImage(props) {
    return (
        <div className="hero__container">
            <div className="hero__layout">
                <h5 className="hero__subtitle">Enjoy your healthy Vietnamese Food</h5>
                <h2 className="hero__title">Miss Vietnam</h2>

                <p className="hero__desc">Our website is all good for you</p>
                <button className="hero__btn">
                    <span>Explore Now</span>
                    <span className="hero__btn--icon1">
                        <ArrowForwardIosIcon />
                    </span>
                    <span className="hero__btn--icon2">
                        <ArrowForwardIosIcon />
                    </span>
                    <span className="hero__btn--icon3">
                        <ArrowForwardIosIcon />
                    </span>
                </button>
            </div>
        </div>
    );
}

export default HeroImage;
