import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';

MostLikedRecipeItem.propTypes = {
    mostLikedRecipeItem: PropTypes.object,
};

function MostLikedRecipeItem({ mostLikedRecipeItem }) {
    return (
        <>
            <div className="rankRecipes__img">
                <img src={mostLikedRecipeItem.url} alt={mostLikedRecipeItem.name} />
            </div>
            <div className="rankRecipes__desc">
                <p className="rankRecipes__date">{mostLikedRecipeItem.date}</p>
                <p className="rankRecipes__name">{mostLikedRecipeItem.name}</p>
                <span className="rankRecipes__star">
                    <StarIcon className="rankRecipes__star--active" />
                    <StarIcon className="rankRecipes__star--active" />
                    <StarIcon className="rankRecipes__star--active" />
                    <StarIcon className="rankRecipes__star--active" />
                    <StarIcon />
                </span>
            </div>
        </>
    );
}

export default MostLikedRecipeItem;
