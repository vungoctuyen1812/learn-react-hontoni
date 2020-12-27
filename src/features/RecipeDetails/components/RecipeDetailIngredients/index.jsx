import React from 'react';
import PropTypes from 'prop-types';

RecipeDetailIngredients.propTypes = {};

function RecipeDetailIngredients({ detailIngredients }) {
    return (
        <div className="recipeDetail__ingredients">
            <h5>Ingredients</h5>
            {detailIngredients.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
}

export default RecipeDetailIngredients;
