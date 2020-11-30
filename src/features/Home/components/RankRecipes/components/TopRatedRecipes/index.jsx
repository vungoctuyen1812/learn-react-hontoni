import PropTypes from 'prop-types';
import React from 'react';
import TopRatedRecipeItem from './components/TopRatedRecipeItem';

TopRatedRecipes.propTypes = {
    topRated: PropTypes.array,
};

function TopRatedRecipes({ topRated }) {
    return (
        <>
            <div className="rankRecipes__item">
                <h3 className="rankRecipes__title">Top Rated Recipes</h3>
                {topRated.map((item) => (
                    <div key={item.id} className="rankRecipes__wrapper">
                        <TopRatedRecipeItem topRatedRecipeItem={item} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default TopRatedRecipes;
