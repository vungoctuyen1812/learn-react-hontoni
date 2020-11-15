import React from 'react';
import PropTypes from 'prop-types';

ReviewRecipes.propTypes = {
    reviews: PropTypes.array,
};

function ReviewRecipes({ reviews }) {
    return <div className="rankRecipes__item"></div>;
}

export default ReviewRecipes;
