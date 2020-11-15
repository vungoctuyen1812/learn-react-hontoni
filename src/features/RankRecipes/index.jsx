import React from 'react';
import MostLikedRecipes from './components/MostLikedRecipes';
import TopRatedRecipes from './components/TopRatedRecipes';
import ReviewRecipes from './components/ReviewRecipes';
import './styles.scss';
RankRecipes.propTypes = {};

function RankRecipes(props) {
    const topRated = [
        {
            id: 1,
            name: 'Banh troi tau',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1537119933321-528a14396ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80',
        },
        {
            id: 2,
            name: 'Bun gi khong biet',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1604228982586-ded54b1ad579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 3,
            name: 'Cafe sua da',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1587899053914-4894c3ca656d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        },
        {
            id: 4,
            name: 'Cha gio Sai Gon',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1548811256-1627d99e7a2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
        },
        {
            id: 5,
            name: 'Ga ran chien bot',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        },
    ];
    const mostLiked = [
        {
            id: 1,
            name: 'Banh troi tau',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1537119933321-528a14396ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80',
        },
        {
            id: 2,
            name: 'Bun gi khong biet',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1604228982586-ded54b1ad579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 3,
            name: 'Cafe sua da',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1587899053914-4894c3ca656d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        },
        {
            id: 4,
            name: 'Cha gio Sai Gon',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1548811256-1627d99e7a2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
        },
        {
            id: 5,
            name: 'Ga ran chien bot',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        },
    ];
    const reviews = [
        {
            id: 1,
            date: 'November 14, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By Maria Williams',
            desc:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eos ipsa animi iste, nobis possimus?',
            comments: 2,
            url:
                'https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        },
    ];
    return (
        <div className="rankRecipes__container">
            <MostLikedRecipes mostLiked={mostLiked} />
            <TopRatedRecipes topRated={topRated} />
            <ReviewRecipes reviews={reviews} />
        </div>
    );
}

export default RankRecipes;
