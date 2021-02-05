import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import './styles.scss';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
HeroImage.propTypes = {};

function HeroImage(props) {
    return (
        <div className="hero__container">
            <div className="hero__layout">
                <Zoom left cascade>
                    <h5 className="hero__subtitle">新鮮なベトナム料理を食べましょう</h5>

                    <h2 className="hero__title">Miss Vietnam</h2>
                    <p className="hero__desc">一緒に太りませんか</p>
                </Zoom>
                <Fade left>
                    <button className="hero__btn">
                        <span>詳しくは</span>
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
                </Fade>
            </div>
        </div>
    );
}

export default HeroImage;
