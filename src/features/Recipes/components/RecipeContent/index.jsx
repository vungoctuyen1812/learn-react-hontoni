import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
RecipeContent.propTypes = {
    content: PropTypes.array,
};

function RecipeContent({ content }) {
    return (
        <div className="recipes__content">
            <div className="recipes__title">Recipes</div>
            <div className="recipes__wrapper">
                {content.map((item) => (
                    <div key={item.id} className="recipes__item">
                        <img src={item.url} alt={item.name} />
                        <div className="recipes__item--desc">
                            <p>{item.name}</p>
                            <span>
                                <StarIcon className="lastRecipes__item--active" />
                                <StarIcon className="lastRecipes__item--active" />
                                <StarIcon className="lastRecipes__item--active" />
                                <StarIcon className="lastRecipes__item--active" />
                                <StarIcon />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeContent;
