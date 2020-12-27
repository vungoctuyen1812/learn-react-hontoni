import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './features/Footer';
import Home from './features/Home';
import NavbarFeature from './features/Navbar';
import RecipeDetails from './features/RecipeDetails';
import Recipes from './features/Recipes';

function App() {
    const [recipeDetail, setRecipeDetail] = useState({});

    return (
        <div className="App">
            <BrowserRouter>
                <NavbarFeature />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/recipes">
                        <Recipes setRecipeDetail={setRecipeDetail}></Recipes>
                    </Route>
                    <Route path="/recipedetail">
                        <RecipeDetails recipeDetail={recipeDetail}></RecipeDetails>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
