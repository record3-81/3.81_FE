// src/register_page/home.js
import React from 'react';
import { Container, TitleImage, KakaoLoginButton } from './styled/styled';
const Home = () => {
    return (
        <Container>
            <TitleImage alt="3.81mm Archive Your Taste" />
            <KakaoLoginButton alt="카카오 로그인 버튼" />
        </Container>
    );
};

export default Home;
