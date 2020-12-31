import React from 'react';
import PropTypes from 'prop-types';

RecipeDetailIngredients.propTypes = {};

function RecipeDetailIngredients({ detailIngredients }) {
    return (
        <div className="recipeDetail__ingredients">
            <h5>Ingredients</h5>
            <ul className="recipeDetail__ingredients--list">
                {detailIngredients.map((item) => (
                    <li key={item.id} className="recipeDetail__ingredients--item">
                        <div className="recipeDetail__formGroup">
                            <input type="checkbox" name="checkbox" id={item.unique} />
                            <label className="square" htmlFor={item.unique}>
                                {item.content}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeDetailIngredients;
