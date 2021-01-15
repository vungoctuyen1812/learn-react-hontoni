import React from 'react';
import PropTypes from 'prop-types';
import backgroundImg from './page-top-bg.jpg';
import Swing from 'react-reveal/Swing';
RecipeTitle.propTypes = {
    recipeTitle: PropTypes.object,
};

function RecipeTitle({ recipeTitle }) {
    const recipeTitleStyle = {
        backgroundImage: 'url(' + backgroundImg + ')',
    };
    return (
        <div style={recipeTitleStyle} className="recipes__header">
            <Swing>
                <h1>{recipeTitle.title}</h1>
            </Swing>
        </div>
    );
}

export default RecipeTitle;
