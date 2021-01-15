import React from 'react';
import MostLikedRecipes from './components/MostLikedRecipes';
import TopRatedRecipes from './components/TopRatedRecipes';
import ReviewRecipes from './components/ReviewRecipes';
import Fade from 'react-reveal/Fade';
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
    const reviewsList = [
        {
            id: 1,
            date: 'March 07, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By Maria Williams',
            desc:
                'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
            comments: 2,
            url:
                'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1930&q=80',
        },
        {
            id: 2,
            date: 'November 14, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By Big Daddy',
            desc:
                'It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.',
            comments: 2,
            url:
                'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 3,
            date: 'November 27, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By Hatake Hana',
            desc:
                'A small local restaurant with great service, food, and overall experience! Definitely a go-to place for (FN) when you are in (CN)! Huge variety of (FN) to choose from & side dishes are delicious as well.',
            comments: 1,
            url:
                'https://images.unsplash.com/photo-1579869696034-ec145eb3987c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 4,
            date: 'December 22, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By John Cena',
            desc:
                'Loved this place. The atmosphere, food and most of the drinks were great. The bartenders knew their mixology and it showed in the drinks. Great place to hangout, chill or go out on a date.',
            comments: 3,
            url:
                'https://images.unsplash.com/photo-1571705042748-55feda1cfadc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        },
        {
            id: 5,
            date: 'July 02, 2020',
            name: 'Miss Viet Nam  Review',
            writer: 'By Den Vau',
            desc:
                'Absolutely amazing place to eat, we will be making a reservation for our next visit in (CN)! 10 of 10 for every single aspect of this meal, and this is coming from people who know and love great food!',
            comments: 4,
            url:
                'https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80',
        },
    ];
    return (
        <Fade left>
            <div className="rankRecipes__container">
                <MostLikedRecipes mostLiked={mostLiked} />
                <TopRatedRecipes topRated={topRated} />
                <ReviewRecipes reviewsList={reviewsList} />
            </div>
        </Fade>
    );
}

export default RankRecipes;
