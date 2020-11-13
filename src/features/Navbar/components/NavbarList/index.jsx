import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

NavbarList.propTypes = {
    navbarList: PropTypes.array.isRequired,
};

function NavbarList({ navbarList }) {
    return (
        <React.Fragment>
            <ul className="navbar__list">
                {navbarList.map((item) => (
                    <NavLink key={item.id} to={item.path} className="navbar__list--active">
                        <li>{item.label}</li>
                    </NavLink>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default NavbarList;
