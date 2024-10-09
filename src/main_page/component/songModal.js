import React, { useEffect, useState } from 'react';
import * as S from '../styled/styledModal';
import add_button from '../image/add_button.svg';
import sub_button from '../image/sub_button.svg';
import gift from '../image/gift.svg';

function MusicBox({ albumPic, title, artist, isPicked }) {
    return (
        <S.ContentBowl>
            <S.AlbumPic>
                <img src={gift} />
            </S.AlbumPic>
            <S.TitleAndArtistBox>
                <S.Title>{title}</S.Title>
                <S.Artist>{artist}</S.Artist>
            </S.TitleAndArtistBox>
            {isPicked ? (
                <S.buttonImg>
                    <img src={sub_button} />
                </S.buttonImg>
            ) : (
                <S.buttonImg>
                    <img src={add_button} />
                </S.buttonImg>
            )}
        </S.ContentBowl>
    );
}

function SongModal() {
    const songList = [
        {
            id: 1,
            title: '노래 제목111',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './1.png',
        },
        {
            id: 2,
            title: '노래 제목222',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 3,
            title: '노래 제목3',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 4,
            title: '노래 제목4',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 5,
            title: '노래 5',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 6,
            title: '노래 666666',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '노래 제목7',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '노래 제목8',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '노래 제목이 너무너무 길면 어떡하지? 아래로 내려가네',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '노래 제목10',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '11',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '12',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '13',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '14',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '15',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '16',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },

        {
            id: 2,
            title: '17',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '18!',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },

        {
            id: 2,
            title: '19',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },

        {
            id: 2,
            title: '20 마지막노래',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '21',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '22',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '23',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '24',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '25',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '26끝!',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '더미!',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '더미',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '더미',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '더미',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
        {
            id: 2,
            title: '더미',
            artist: '가수',
            album: '앨범 이름',
            genre: '장르',
            albumPic: './2.png',
        },
    ];

    return (
        <>
            <S.Box>
                {songList.map((value, index) => {
                    console.log(value, value.title, value.artist);
                    return (
                        <MusicBox
                            id={index}
                            albumPic={value.albumPic}
                            title={value.title}
                            artist={value.artist}
                            // isPicked={value.isPicked}
                            isPicked={true}
                        />
                    );
                })}
            </S.Box>
        </>
    );
}

export default SongModal;
