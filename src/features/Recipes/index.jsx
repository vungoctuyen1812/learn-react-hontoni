import React from 'react';
import RecipeContent from './components/RecipeContent';
import RecipeTitle from './components/RecipeTitle';
import './styles.scss';
Recipes.propTypes = {};

function Recipes(props) {
    const recipesList = [
        {
            id: 1,
            name: 'Bun Bo Hue',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1597345637412-9fd611e758f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 2,
            name: 'Banh ran',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1583077874340-79db6564672e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        },
        {
            id: 3,
            name: 'Pho',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1533787761082-492a5b83e614?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 4,
            name: 'Banh cuon',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1594020293008-5f99f60bd4d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1981&q=80',
        },
        {
            id: 5,
            name: 'Banh phong tom',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1511714830748-636e1a12bb88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 6,
            name: 'Banh xeo',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1604228994005-d76f4139be68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 7,
            name: 'Bun  rieu',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1577859623802-b5e3ca51f885?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 8,
            name: 'Pho ga',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1590420882553-4f9150b71f92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1945&q=80',
        },
        {
            id: 9,
            name: 'Banh my',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
        },
        {
            id: 10,
            name: 'Cai gi do',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
        },
        {
            id: 11,
            name: 'Banh my',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
        },
        {
            id: 12,
            name: 'Cai gi do',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
        },
    ];
    const recipeTitle = {
        title: 'Recipes',
        urlImg:
            'https://images.unsplash.com/photo-1506917980821-213681597089?ixid=MXwxMjA3fDB8MHxwaG90by1wYW   dlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    };
    return (
        <React.Fragment>
            <RecipeTitle recipeTitle={recipeTitle} />
            <RecipeContent content={recipesList} />
        </React.Fragment>
    );
}

export default Recipes;
