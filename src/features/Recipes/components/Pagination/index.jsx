import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link, NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';

Pagination.propTypes = {};

function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="recipes__nav--wrapper">
            <ul className="recipes__nav">
                {pageNumbers.map((number) => (
                    <Link key={number} to={`/recipes/page_${number}`}>
                        <li className="recipes__nav--item">
                            <button href={`/recipes/${number}`} onClick={() => paginate(number)}>
                                {number}
                            </button>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
