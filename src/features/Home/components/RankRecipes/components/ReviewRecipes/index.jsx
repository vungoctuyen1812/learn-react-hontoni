import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
ReviewRecipes.propTypes = {
    reviewsList: PropTypes.array,
    handleNextReviewClick: PropTypes.func,
};

ReviewRecipes.defaultProps = { reviewsList: [], handleNextReviewClick: null };
//get random review func
function randomReview() {
    const randomIndex = Math.trunc(Math.random() * 5);
    return randomIndex;
}
//Component
function ReviewRecipes({ reviewsList }) {
    const [content, setContent] = useState(reviewsList[0]);

    function handleNextReviewClick() {
        const newReviewsList = reviewsList;
        let index = content.id;
        if (index >= reviewsList.length) {
            index = 0;
        }

        const newRecipe = newReviewsList[index];
        setContent(newRecipe);
    }
    return (
        <div className="rankRecipes__item review__container">
            <h3 className="rankRecipes__title">Top 5 Reviews</h3>
            <div className="review__wrapper">
                <div className="review__imgWrapper">
                    <img className="review__img" src={content.url} alt={content.name} />
                    <p className="review__number">{content.id}</p>
                    <p className="review__date">{content.date}</p>
                </div>
                <div className="review__content">
                    <blockquote className="review__blockquote">{content.desc}</blockquote>
                    <cite className="review__cite">{content.writer}</cite>
                    <div className="review__btn--wrapper">
                        <button className="review__btn" onClick={() => handleNextReviewClick()}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewRecipes;
