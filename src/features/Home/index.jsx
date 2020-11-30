import React from 'react';
import HeroImage from './components/HeroImage';
import LastestRecipes from './components/LastestRecipes';
import RankRecipes from './components/RankRecipes';
import SpecialRecipes from './components/SpecialRecipes';

Home.propTypes = {};

function Home(props) {
    return (
        <React.Fragment>
            <HeroImage />
            <LastestRecipes />
            <RankRecipes />
            <SpecialRecipes />
        </React.Fragment>
    );
}

export default Home;
