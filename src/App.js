import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import About from './features/About';
import Contact from './features/Contact';
import Footer from './features/Footer';
import Home from './features/Home';
import NavbarFeature from './features/Navbar';
import RecipeDetails from './features/RecipeDetails';
import Recipes from './features/Recipes';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function App() {
    const [recipeDetail, setRecipeDetail] = useState({
        id: 1,
        name: 'Bun Bo Hue',
        star: 4,
        url:
            'https://images.unsplash.com/photo-1597345637412-9fd611e758f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        level: 'Beginner',
        date: 'May 15 2020',
        desc: {
            prep: '15mins',
            cook: '30mins',
            yeilds: `8 servings`,
        },

        ingredients: [
            {
                id: 1,
                unique: 'box_1',
                content: '4 Tbsp (57 gr) butter',
            },
            {
                id: 2,
                unique: 'box_2',
                content: '2 large eggs',
            },
            {
                id: 3,
                unique: 'box_3',
                content: '2 yogurt containers granulated sugar',
            },
            {
                id: 8,
                unique: 'box_4',
                content: '1 vanilla or plain yogurt, 170g container',
            },
            {
                id: 4,
                unique: 'box_5',
                content: 'White flour',
            },
            {
                id: 5,
                unique: 'box_6',
                content: '1.5 yogurt containers milk',
            },
            {
                id: 6,
                unique: 'box_7',
                content: '1/4 tsp cinnamon',
            },
            {
                id: 7,
                unique: 'box_8',
                content: '1 cup fresh blueberries',
            },
        ],
        howToCook: [
            {
                id: 1,
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.',
            },
            {
                id: 2,
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.',
            },
            {
                id: 3,
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.',
            },
            {
                id: 4,
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.',
            },
            {
                id: 5,
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magni.',
            },
        ],
    });
    const scrollStyle = {
        position: 'fixed',
        bottom: 50,
        right: 30,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
        height: '4rem',
        width: '4rem',
        backgroundColor: '#336d88',
        zIndex: 99,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5rem',
        color: '#e79cc2',
        fontSize: '3rem',
    };
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop showUnder={160} style={scrollStyle}>
                    <ArrowUpwardIcon></ArrowUpwardIcon>
                </ScrollToTop>
                <NavbarFeature />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/recipes">
                        <Recipes setRecipeDetail={setRecipeDetail}></Recipes>
                    </Route>
                    <Route path="/recipedetail">
                        <RecipeDetails recipeDetail={recipeDetail}></RecipeDetails>
                    </Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
