import React from 'react';
import styled from 'styled-components';
import tape_storage from '../image/tape_storage.svg';
import edit from '../image/Edit.svg';
import share_mine from '../image/share_mine.svg';
import gift from '../image/gift.svg';
import user from '../image/user.svg';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로 방향으로 정렬 */
    align-items: center; /* 수직 중앙 정렬 */

    height: 100vh; /* 전체 화면 높이*/
    margin: 0; /* 기본 margin 제거 */
    background-color: rgb(62, 46, 34);

    background-image: url(${tape_storage});
    background-repeat: no-repeat;
    /* background-size: contain; 이미지 크기 조정 : 전체 영역에 맞게
    background-position: center; tape_storage가 중앙에 오도록 */

    /* 변경 */
    background-size: auto 100%; /* 이미지의 세로 크기를 100%로 하고 가로는 자동으로 조정 */
    background-position: center top; /* tape_storage가 상단에 오도록 */
`;

export const HeadContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column; /* S.title과 S.content가 수평이 아닌 수직 방향 일렬로 위치 */

    /* width: 24rem;
    width: 350px; 
    height: 30vh; */
    margin: 0;
    align-items: center;
`;

export const Title = styled.p`
    color: white;
    position: absolute;
    font-size: 1.8em;

    width: 20rem;

    margin: 0;
    margin-top: 3.5vh;
    transform: translateX(-5px); /* 10px 만큼 왼쪽으로 이동 */
`;

export const Content = styled.p`
    color: white;
    position: absolute;
    width: 20rem;
    margin: 0%;
    margin-top: 8.5vh;
    margin-left: 2%;
    transform: translateX(-5px); /* 10px 만큼 왼쪽으로 이동 */
`;

export const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 45vw;
    height: 6vh; */

    border-radius: 12px;

    background-color: ${(props) => (props.variant === 'primary' ? 'white' : 'grey')};
    color: ${(props) => (props.variant === 'primary' ? 'black' : 'white')};

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9); /* 그림자 추가 */
`;

export const ButtonContainer = styled.div`
    margin: 0;
    margin-top: 90vh;
    /* HeadContainer와의 간격 조정 */
    display: flex; /* 버튼들을 가로로 정렬 */
    gap: 10px; /* 버튼 간격 조정 */
`;

export const ButtonContent = styled.p`
    font-weight: bold; /* 굵은 글씨 */
    margin: 0; /* 위아래 마진을 0으로 설정 */
    padding: 11px; /* 필요에 따라 패딩 조정 */
`;

export const ImgGoBack = styled.div`
    width: 30px; /* 원하는 크기로 조정 */
    height: auto; /* 비율을 유지하기 위해 */
    position: absolute;
    margin-left: 90%;
    margin-top: 3.5vh;
    transform: translateX(160px); /* 10px 만큼 왼쪽으로 이동 */
`;

export const BtnImg = styled.img`
    width: 20px; /* 원하는 크기로 설정 */
    height: 20px; /* 원하는 크기로 설정 */
    margin-left: 6px;
    transform: translateX(5px);
`;

export const ConditionalImage = ({ variant, state }) => {
    let src;

    if (variant === 'primary' && state === 'login&mine') {
        src = edit;
    } else if (variant === 'primary' && (state === 'notLogin' || state === 'login&notMine')) {
        src = gift;
    } else if (variant === 'secondary' && state === 'login&mine') {
        src = share_mine;
    } else if (variant === 'secondary' && (state === 'notLogin' || state === 'login&notMine')) {
        src = user;
    }

    return <BtnImg src={src} alt="Button Image" />;
};
