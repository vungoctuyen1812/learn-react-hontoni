import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
LastestRecipesItem.propTypes = {
    recipe: PropTypes.object,
};

function LastestRecipesItem({ recipe }) {
    return (
        <>
            <img src={recipe.url} alt={recipe.name} />
            <div className="lastRecipes__item--desc">
                <p>{recipe.name}</p>
                <span>
                    <StarIcon className="lastRecipes__item--active" />
                    <StarIcon className="lastRecipes__item--active" />
                    <StarIcon className="lastRecipes__item--active" />
                    <StarIcon className="lastRecipes__item--active" />
                    <StarIcon />
                </span>
            </div>
        </>
    );
}

export default LastestRecipesItem;
