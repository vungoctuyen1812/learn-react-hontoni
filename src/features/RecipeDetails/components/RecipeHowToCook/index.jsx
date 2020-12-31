import React from 'react';
import PropTypes from 'prop-types';

RecipeHowToCook.propTypes = {};

function RecipeHowToCook({ detailHowToCook }) {
    return (
        <ol className="recipeDetail__howToCook">
            {detailHowToCook.map((item) => (
                <li key={item.id} className="recipeDetail__howToCook--item">
                    <h4>{item.id}.</h4>
                    <p>{item.content}</p>
                </li>
            ))}
        </ol>
    );
}

export default RecipeHowToCook;
