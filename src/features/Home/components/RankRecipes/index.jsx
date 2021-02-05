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
            name: 'バイン　トロイ　タウ',
            date: '2020年04月10日',
            url:
                'https://images.unsplash.com/photo-1537119933321-528a14396ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80',
        },
        {
            id: 2,
            name: '混ぜ　ブン',
            date: '2020年04月10日',
            url:
                'https://images.unsplash.com/photo-1604228982586-ded54b1ad579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 3,
            name: 'アイス　ミルク　コーヒー',
            date: '2020年11月10日',
            url:
                'https://images.unsplash.com/photo-1587899053914-4894c3ca656d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        },
        {
            id: 4,
            name: 'サイ　ゴン　チャ　ジョー',
            date: '2020年11月10日',
            url:
                'https://images.unsplash.com/photo-1548811256-1627d99e7a2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
        },
        {
            id: 5,
            name: '唐揚げ',
            date: '2020年11月10日',
            url:
                'https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        },
    ];
    const mostLiked = [
        {
            id: 1,
            name: 'バイン　トロイ　タウ',
            date: '2021年1月25日',
            url:
                'https://images.unsplash.com/photo-1537119933321-528a14396ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2132&q=80',
        },
        {
            id: 2,
            name: '混ぜ　ブン',
            date: '2021年1月25日',
            url:
                'https://images.unsplash.com/photo-1604228982586-ded54b1ad579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 3,
            name: 'アイス　ミルク　コーヒー',
            date: '2021年1月25日',
            url:
                'https://images.unsplash.com/photo-1587899053914-4894c3ca656d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        },
        {
            id: 4,
            name: 'サイ　ゴン　チャ　ジョー',
            date: '2021年1月25日',
            url:
                'https://images.unsplash.com/photo-1548811256-1627d99e7a2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
        },
        {
            id: 5,
            name: '唐揚げ',
            date: '2021年1月25日',
            url:
                'https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        },
    ];
    const reviewsList = [
        {
            id: 1,
            date: '2020年9月27日',
            name: '美濃吉京懷石  評判',
            writer: '木村かよ子',
            desc:
                '静かに食事したくて行くと(ランチ)、小さい子どもの鳴き声がする事が何回かあって、そこの点をお店で配慮してもらえたら星5でした。',
            comments: 2,
            url:
                'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1930&q=80',
        },
        {
            id: 2,
            date: '2021年1月12日',
            name: '六丁目蟹みつ 評判',
            writer: 'ほあ',
            desc:
                '何より蟹が活きていて新鮮だったのがポイントだったと思います。5周年記念でスパークリングワインがついてきたのもうれしかった。今度はディナーで伺いたいと思っています。',
            comments: 2,
            url:
                'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 3,
            date: '2021年1月17日',
            name: '田村屋 評判',
            writer: '山田光輝',
            desc: '和室もあるし、小さなお子さんでも食べられる料理も多いので家族でも行けるお店だと思いました。',
            comments: 1,
            url:
                'https://images.unsplash.com/photo-1579869696034-ec145eb3987c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            id: 4,
            date: '2020年12月19日',
            name: '新宿なごみ　評判',
            writer: 'ぶりぶり左衛門',
            desc: '季節によって鍋やら松茸土瓶蒸しやらハモ料理やら、歌舞伎町には無い隠れ家的な和食屋さんでした。',
            comments: 3,
            url:
                'https://images.unsplash.com/photo-1571705042748-55feda1cfadc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        },
        {
            id: 5,
            date: '2020年1月8日',
            name: 'レストランかおり　評判',
            writer: '濱野周司',
            desc: '昔からある町の洋食屋さん。コスパ良し。',
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
