import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import LightSpeed from 'react-reveal/LightSpeed';
import './styles.scss';
SpecialRecipes.propTypes = {};

function SpecialRecipes(props) {
    const datas = [
        {
            id: 1,
            name: 'Banh troi tau',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1537119933321-528a14396ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80',
            chef: 'Janice Smith',
            chefUrl:
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        },

        {
            id: 2,
            name: 'Bun gi khong biet',
            date: 'November 14, 2020',
            url:
                'https://images.unsplash.com/photo-1604228982586-ded54b1ad579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            chef: 'Janice Smith',
            chefUrl:
                'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        },
    ];
    return (
        <section className="specialRecipes__container">
            {datas.map((item) => (
                <LightSpeed left>
                    <div key={item.id} className="specialRecipes__item">
                        <div className="specialRecipes__imgWrapper">
                            <img src={item.url} alt={item.name} />
                        </div>
                        <div className="specialRecipes__content">
                            <p className="specialRecipes__date">{item.date}</p>
                            <h5 className="specialRecipes__name">{item.name}</h5>
                            <span className="rankRecipes__star">
                                <StarIcon className="rankRecipes__star--active" />
                                <StarIcon className="rankRecipes__star--active" />
                                <StarIcon className="rankRecipes__star--active" />
                                <StarIcon className="rankRecipes__star--active" />
                                <StarIcon />
                            </span>
                            <div className="specialRecipes__chef">
                                <img src={item.chefUrl} alt={item.chef} />
                                <p> By {item.chef}</p>
                            </div>
                        </div>
                    </div>
                </LightSpeed>
            ))}
        </section>
    );
}

export default SpecialRecipes;
