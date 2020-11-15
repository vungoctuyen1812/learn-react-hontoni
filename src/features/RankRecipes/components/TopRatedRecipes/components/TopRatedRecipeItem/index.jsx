import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import './styles.scss';
TopRatedRecipeItem.propTypes = {
    topRatedRecipeItem: PropTypes.object,
};

function TopRatedRecipeItem({ topRatedRecipeItem }) {
    return (
        <>
            <div className="rankRecipes__img">
                <img src={topRatedRecipeItem.url} alt={topRatedRecipeItem.name} />
            </div>

            <div className="rankRecipes__desc">
                <p className="rankRecipes__date">{topRatedRecipeItem.date}</p>
                <p className="rankRecipes__name">{topRatedRecipeItem.name}</p>
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

export default TopRatedRecipeItem;
