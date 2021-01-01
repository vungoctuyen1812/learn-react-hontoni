import React from 'react';
import PropTypes from 'prop-types';
import backgroundImg from './page-top-bg.jpg';
RecipeTitle.propTypes = {
    recipeTitle: PropTypes.object,
};

function RecipeTitle({ recipeTitle }) {
    const recipeTitleStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
    };
    return (
        <div style={recipeTitleStyle} className="recipes__header">
            <h1>{recipeTitle.title}</h1>
        </div>
    );
}

export default RecipeTitle;
