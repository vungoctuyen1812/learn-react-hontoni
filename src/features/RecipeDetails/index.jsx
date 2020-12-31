import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import RecipeDetailIntroduce from './components/RecipeDetailIntroduce';
import RecipeDetailIngredients from './components/RecipeDetailIngredients';
import RecipeHowToCook from './components/RecipeHowToCook';
import './styles.scss';
RecipeDetails.propTypes = {};

function RecipeDetails({ recipeDetail }) {
    const history = useHistory();
    if (!Object.entries(recipeDetail).length) return null;
    return (
        <React.Fragment>
            <section
                className="recipeDetail__heroImg"
                style={{ backgroundImage: `url(${recipeDetail.url})` }}
            ></section>
            <section className="recipeDetail__container">
                <div className="recipeDetail__title">
                    <h5>For {recipeDetail.level}</h5>
                    <h3>{recipeDetail.name}</h3>
                    <p>{recipeDetail.date}</p>
                    <span>
                        <StarIcon className="lastRecipes__item--active" />
                        <StarIcon className="lastRecipes__item--active" />
                        <StarIcon className="lastRecipes__item--active" />
                        <StarIcon className="lastRecipes__item--active" />
                        <StarIcon />
                    </span>
                </div>
                <div className="recipeDetail__content">
                    <div className="recipeDetail__leftCol">
                        <RecipeDetailIntroduce detailIntroduce={recipeDetail.desc}></RecipeDetailIntroduce>
                        <RecipeDetailIngredients detailIngredients={recipeDetail.ingredients}></RecipeDetailIngredients>
                    </div>
                    <div className="recipeDetail__rightCol">
                        <RecipeHowToCook detailHowToCook={recipeDetail.howToCook}></RecipeHowToCook>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default RecipeDetails;
