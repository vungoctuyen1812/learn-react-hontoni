import { useState } from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import NavbarList from './components/NavbarList';
import './styles.scss';
import DehazeIcon from '@material-ui/icons/Dehaze';

NavbarFeature.propTypes = {};

function NavbarFeature() {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    const navbarList = [
        {
            id: 1,
            label: 'home',
            path: '/',
        },
        {
            id: 2,
            label: 'recipes',
            path: '/recipes',
        },
        {
            id: 3,
            label: 'recipe detail',
            path: '/recipedetail',
        },
        {
            id: 4,
            label: 'about',
            path: '/about',
        },
        {
            id: 5,
            label: 'contact',
            path: '/contact',
        },
    ];
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar__container">
                    <FastfoodIcon className="navbar__icon" />
                    <NavbarList navbarList={navbarList} isActive={isActive} />

                    <DehazeIcon className="navbar__toggle" onClick={() => handleToggle()} />
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavbarFeature;
