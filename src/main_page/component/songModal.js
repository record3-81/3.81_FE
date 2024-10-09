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
            title: '노래 제목9',
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
