import React from 'react';
import PropTypes from 'prop-types';

RecipeDetailIntroduce.propTypes = {};

function RecipeDetailIntroduce({ detailIntroduce }) {
    return (
        <div className="recipeDetail__introduce">
            <span className="recipeDetail__beaf"></span>
            <p>Prep: {detailIntroduce.prep}</p>
            <p>Cook: {detailIntroduce.cook}</p>
            <p>Yeilds: {detailIntroduce.yeilds}</p>
        </div>
    );
}

export default RecipeDetailIntroduce;
