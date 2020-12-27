import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import RecipeContent from './components/RecipeContent';
import RecipeTitle from './components/RecipeTitle';
import './styles.scss';
Recipes.propTypes = {};

function Recipes({ setRecipeDetail }) {
    const recipesList = [
        {
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
                '4 Tbsp (57 gr) butter',
                '2 large eggs',
                '2 yogurt containers granulated sugar',
                '1 vanilla or plain yogurt, 170g container',
                'White flour',
                '1.5 yogurt containers milk',
                '1/4 tsp cinnamon',
                '1 cup fresh blueberries',
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
            name: 'Xoi kem 2 cai dui ga',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1593787614839-9b93c8998f25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 12,
            name: 'Xoi trung',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1589942151968-89bfe5d60c61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 13,
            name: 'Bap chien bo',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1560717844-cd0b22784b00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 14,
            name: 'Thit bo so tich ku',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1555178897-7774373fbe9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 15,
            name: 'Chicken Fired',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1565511223310-ee01e273da15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 16,
            name: 'Thit tha',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 17,
            name: 'Beef',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1598515213692-5f252f75d785?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 18,
            name: 'Com rang',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        },
        {
            id: 19,
            name: 'Vietnamese Sandwich',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
        },
        {
            id: 20,
            name: 'Gyoza',
            star: 4,
            url:
                'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
    ];
    console.log(typeof recipesList);
    const recipeTitle = {
        title: 'Recipes',
        urlImg:
            'https://images.unsplash.com/photo-1506917980821-213681597089?ixid=MXwxMjA3fDB8MHxwaG90by1wYW   dlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    };
    //define some state

    const [items] = useState(recipesList);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    //get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <React.Fragment>
            <RecipeTitle recipeTitle={recipeTitle} />
            <RecipeContent content={currentItems} setRecipeDetail={setRecipeDetail} />
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
        </React.Fragment>
    );
}

export default Recipes;
