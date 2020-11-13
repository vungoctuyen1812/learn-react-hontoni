import React from 'react';
import AlbumList from './components/AlbumList';
import './style.scss';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Let's go",
            thumbnaiUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/4/6/4/c46428d5decbc33f592803701ae348fd.jpg',
        },
        {
            id: 2,
            name: 'Nam thần Nhạc Việt',
            thumbnaiUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/3/9/3/d3937f2f7905b7b48efa3900bcaacbff.jpg',
        },
        {
            id: 3,
            name: 'TICK TOCK: Giai điệu gây nghiện',
            thumbnaiUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/e/e/c/eeecd2e14cc730b0f748d5362723723a.jpg',
        },
        {
            id: 4,
            name: 'Nhạc Hoa cho những vui vẻ',
            thumbnaiUrl:
                'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/f/c/e/3fce5bceca64b7d191200a93598fff2c.jpg',
        },
    ];
    const test = 1;
    return (
        <div>
            <h2>May u like</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;
