import React from 'react';
import PropTypes from 'prop-types';
import MostLikedRecipeItem from './components/MostLikeRecipeItem';

MostLikedRecipes.propTypes = {
    mostLiked: PropTypes.array,
};

function MostLikedRecipes({ mostLiked }) {
    return (
        <>
            <div className="rankRecipes__item">
                <h3 className="rankRecipes__title">Most Liked Recipes</h3>
                {mostLiked.map((item) => (
                    <div key={item.id} className="rankRecipes__wrapper">
                        <MostLikedRecipeItem mostLikedRecipeItem={item} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default MostLikedRecipes;
