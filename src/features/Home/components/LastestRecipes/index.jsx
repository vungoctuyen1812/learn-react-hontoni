import React from 'react';
import LastestRecipesList from './components/LastestRecipesList';
import './styles.scss';
LastestRecipes.propTypes = {};

function LastestRecipes(props) {
    const lastestRecipesList = [
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
    ];
    return (
        <section className="lastRecipes__container">
            <h3 className="lastRecipes__title">Lastest Recipes</h3>
            <LastestRecipesList lastestRecipesList={lastestRecipesList} />
        </section>
    );
}

export default LastestRecipes;
