import styled from 'styled-components';
import tape_storage from '../image/tape_storage.png';

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
    flex-direction: column; /* S.title과 S.content가 수평이 아닌 수직 방향 일렬로 위치 */
    margin-top: 0;
    text-align: left;
`;

export const Title = styled.h1`
    color: white;
    height: 5vh;
    margin: 0;
    margin-top: 5%;
`;

export const Content = styled.p`
    color: white;
    margin: 0%;
    margin-top: 3%;
`;

export const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* 
    width: 13vw;
    height: 5vh; */
    border-radius: 15px;

    background-color: ${(props) => (props.variant === 'primary' ? 'white' : 'grey')};
    color: ${(props) => (props.variant === 'primary' ? 'black' : 'white')};
`;

export const ButtonContainer = styled.div`
    margin: 0;
    margin-top: 80vh;
    /* HeadContainer와의 간격 조정 */
    display: flex; /* 버튼들을 가로로 정렬 */
    gap: 10px; /* 버튼 간격 조정 */
`;
