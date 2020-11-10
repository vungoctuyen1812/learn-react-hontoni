import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList, test}) {

    return (
        
        <div>
            <ul className="album-list">
                {albumList.map(album=>(
                    <li key={album.id}>
                        <Album album={album}></Album>
                    </li>
            ))}
            </ul>
        </div>
    );
}

export default AlbumList;