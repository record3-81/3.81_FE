import styled from 'styled-components';
import login_background from '../image/login.png';
import kakao_login_btn from '../image/kakao_login_btn.png';
import login_title from '../image/login_title.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(${login_background});
    background-size: cover;
    background-position: center;
`;

export const TitleImage = styled.img.attrs({
    src: login_title,
})`
    width: 300px; /* 원하는 크기로 조정 */
    margin-bottom: 30px;
`;

export const KakaoLoginButton = styled.img.attrs({
    src: kakao_login_btn,
})`
    width: 192px;
    height: 47px;
    cursor: pointer;
    margin-top: 160px;
`;
