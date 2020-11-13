import PropTypes from 'prop-types';
import React from 'react';
import Album from '../Album';
import './style.scss';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <div>
            <ul className="album-list">
                {albumList.map((album) => (
                    <li key={album.id}>
                        <Album album={album}></Album>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;
