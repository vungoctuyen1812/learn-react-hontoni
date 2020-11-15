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
    const [content, setContent] = useState(
        {
            id: 1,
            date: 'November 14, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By Maria Williams',
            desc:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eos ipsa animi iste, nobis possimus?',
            comments: 2,
            url:
                'https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        },
        []
    );

    function handleNextReviewClick() {
        const newReviewsList = reviewsList;
        const index = randomReview();
        const newRecipe = newReviewsList[index];
        setContent(newRecipe);
    }
    return (
        <div className="rankRecipes__item review__container">
            <img className="review__img" src={content.url} alt={content.name} />
            <p className="review__number">{content.id}</p>
            <p className="review__date">{content.date}</p>
            <div className="review__content">
                <blockquote className="review__blockquote">{content.desc}</blockquote>
                <cite className="review__cite">{content.writer}</cite>
                <div className="review__btn--wrapper">
                    <button className="review__btn" onClick={() => handleNextReviewClick()}>
                        <ArrowForwardRoundedIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewRecipes;
