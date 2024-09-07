import styled from 'styled-components';
import tape_storage from '../image/tape_storage.png';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로 방향으로 정렬 */
    align-items: center; /* 수직 중앙 정렬 */

    height: 100vh; /* 전체 화면 높이*/
    margin: 0; /* 기본 margin 제거 */
    /* background-color: rgb(79, 61, 48); */
    background-color: rgb(62, 46, 34);

    background-image: url(${tape_storage});
    background-repeat: no-repeat;
    background-size: contain; /* 이미지 크기 조정: 전체 영역에 맞게 조정 */
    background-position: center; /* tape_storage가 중앙에 오도록 */
`;

export const HeadContainer = styled.div`
    margin-top: 0;
    text-align: left;
    width: 44vw;
`;

export const Title = styled.h1`
    color: white;
`;

export const Content = styled.p`
    color: white;
    margin-top: -5%;
`;

export const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 13vw;
    height: 5vh;
    border-radius: 15px;

    background-color: ${(props) => (props.variant === 'primary' ? 'white' : 'grey')};
    color: ${(props) => (props.variant === 'primary' ? 'black' : 'white')};
`;

export const ButtonContainer = styled.div`
    margin-top: 76vh; /* HeadContainer와의 간격 조정 */
    display: flex; /* 버튼들을 가로로 정렬 */
    gap: 10px; /* 버튼 간격 조정 */
`;
