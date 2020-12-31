import React from 'react';
import PropTypes from 'prop-types';

RecipeDetailIntroduce.propTypes = {};

function RecipeDetailIntroduce({ detailIntroduce }) {
    return (
        <div className="recipeDetail__introduce">
            <span className="recipeDetail__beaf"></span>
            <p>{detailIntroduce.prep}</p>
            <p>{detailIntroduce.cook}</p>
            <p>{detailIntroduce.yeilds}</p>
        </div>
    );
}

export default RecipeDetailIntroduce;
