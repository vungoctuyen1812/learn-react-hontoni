import React from 'react';
import PropTypes from 'prop-types';

RecipeHowToCook.propTypes = {};

function RecipeHowToCook({ detailHowToCook }) {
    return (
        <ul>
            {detailHowToCook.map((item) => (
                <li key={item.id}>{item.content}</li>
            ))}
        </ul>
    );
}

export default RecipeHowToCook;
