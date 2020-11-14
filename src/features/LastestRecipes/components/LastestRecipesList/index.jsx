import React from 'react';
import PropTypes from 'prop-types';
import LastestRecipesItem from '../LastestRecipesItem';

LastestRecipesList.propTypes = {
    LastestRecipesList: PropTypes.array,
};

function LastestRecipesList({ lastestRecipesList }) {
    return (
        <div className="lastRecipes__wrapper">
            {lastestRecipesList.map((recipe) => (
                <div key={recipe.id} className="lastRecipes__item">
                    <LastestRecipesItem recipe={recipe} />
                </div>
            ))}
        </div>
    );
}

export default LastestRecipesList;
