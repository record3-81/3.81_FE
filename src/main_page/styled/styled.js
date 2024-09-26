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
    position: relative;
    flex-direction: column; /* S.title과 S.content가 수평이 아닌 수직 방향 일렬로 위치 */

    width: 80vw;
    margin-top: 0;
    text-align: left;
`;

export const Title = styled.p`
    color: white;
    position: absolute;
    font-size: 1.8em;

    height: 5vh;
    margin: 0;
    margin-top: 7%;

    margin-left: -8%;
`;

export const Content = styled.p`
    color: white;
    position: absolute;
    margin: 0%;
    margin-top: 8.5vh;
    margin-left: -8%;
`;

export const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* 
    width: 13vw;
    height: 5vh; */
    border-radius: 12px;

    background-color: ${(props) => (props.variant === 'primary' ? 'white' : 'grey')};
    color: ${(props) => (props.variant === 'primary' ? 'black' : 'white')};

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9); /* 그림자 추가 */
`;

export const ButtonContainer = styled.div`
    margin: 0;
    margin-top: 83vh;
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
    margin-left: 100%;
    margin-top: 9%;
`;
