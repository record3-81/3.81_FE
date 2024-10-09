import styled from 'styled-components';

export const Box = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 28rem;
    max-height: 100%;
    overflow-y: auto;

    position: fixed;

    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 40vh;
`;

export const ContentBowl = styled.div`
    width: 80%;
    min-height: 7.5%;
    height: 7.5%;

    display: flex;
    background-color: rgb(163, 160, 157);

    align-items: center;
    justify-content: space-between;

    border-radius: 12px;
    margin-bottom: 2px;
`;

export const TitleAndArtistBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;

    margin-left: 3vw;
`;

export const Title = styled.h4`
    color: black;
    margin: 0;
`;

export const Artist = styled.p`
    color: black;
    margin: 0;
`;

export const buttonImg = styled.div`
    width: 25px; /* 원하는 크기로 설정 */
    height: 25px; /* 원하는 크기로 설정 */
`;

export const AlbumPic = styled.div`
    width: 50px;
    height: 50px;
`;
