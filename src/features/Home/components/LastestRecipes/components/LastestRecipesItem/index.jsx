import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import Fade from 'react-reveal/Fade';
LastestRecipesItem.propTypes = {
    recipe: PropTypes.object,
};

function LastestRecipesItem({ recipe }) {
    return (
        <>
            <Fade left cascade>
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
            </Fade>
        </>
    );
}

export default LastestRecipesItem;
