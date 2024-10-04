import React, { useEffect, useState } from 'react';
import * as S from './styled/styled';
import goBack from './image/goBack.svg';

const isLogined = '로그인O'; // 유저정보 백에서 받아오기
const user = {
    name: '손예원',
    tapeCount: 8,
};
const position = 'login&notMine'; // 현재 누구 수납장에 있는지

function Main() {
    const [isUserLogined, setIsUserLogined] = useState(false);
    const [content, setContent] = useState(['카세트 추가하기', '내 수납장 만들기']);

    useEffect(() => {
        if (isLogined === '로그인O') {
            setIsUserLogined(true);
        }
    }, [isUserLogined]);

    useEffect(() => {
        if (isUserLogined && position === 'login&mine') {
            setContent(['카세트 추가하기', '내 수납장 공유하기']);
        } else if (isUserLogined && position === 'login&notMine') {
            setContent(['카세트 선물하기', '내 수납장 보러가기']);
        } else {
            // 로그인X, notLogin
            setContent(['카세트 선물하기', '내 수납장 만들기']);
        }
    }, [isUserLogined, position]);
    console.log(isUserLogined, position);
    console.log(content);

    return (
        <S.MainContainer>
            <S.HeadContainer>
                <Header name={user.name} tapeCount={user.tapeCount} />
            </S.HeadContainer>
            <S.ButtonContainer>
                <Button variant="primary" state={position} onClick={() => alert('흰색박스')}>
                    {content[0]}
                </Button>
                <Button variant="secondary" state={position} onClick={() => alert('회색박스')}>
                    {content[1]}
                </Button>
            </S.ButtonContainer>
        </S.MainContainer>
    );
}

function Header({ name, tapeCount }) {
    return (
        <>
            <S.Title>
                <strong>{name}</strong>
                님의 수납장
            </S.Title>
            <S.ImgGoBack>
                <img src={goBack} alt="Go Back" />
            </S.ImgGoBack>
            <S.Content>{tapeCount}개의 카세트 테이프가 보관되어 있습니다.</S.Content>
        </>
    );
}

function Button({ variant, state, children, onClick }) {
    // variant 에는 현재 내 수납장인지, 로그인 되어있는지 여부
    return (
        <S.StyledButton variant={variant} onClick={onClick}>
            <S.ConditionalImage variant={variant} state={state} />
            <S.ButtonContent>{children}</S.ButtonContent>
        </S.StyledButton>
    );
}

export default Main;
