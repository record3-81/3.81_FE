import { useEffect, useState } from 'react';
import './main.css';

const user = '유저정보 백에서 받아오기';
const position = '현재 누구 수납장에 있는지';

function Main() {
    const [login_info, setLogin] = useState('logout');
    const [content, setContent] = useState(['카세트 추가하기', '내 수납장 만들기']);

    useEffect(() => {
        if (user == '로그인되어있음') {
            setLogin('login');
        }
    }, [login_info]);

    useEffect(() => {
        if (login_info == 'login' && position == '현재 내 수납장에 있음') {
            setContent(['카세트 추가하기', '내 수납장 공유하기']);
        } else if (login_info == 'login' && position == '남의 수납장 구경중') {
            setContent(['카세트 선물하기', '내 수납장 보러가기']);
        }
    }, [login_info, position]);

    return (
        <div className="main_container">
            <Header>user.name</Header>
            <p>n개의 카세트 테이프가 보관되어 있습니다.</p>
            <Button className="b1">{content[0]}</Button>
            <Button className="b2">{content[1]}</Button>
        </div>
    );
}

function Header(props) {
    return <h1>{props.children}님의 수납장</h1>;
}

function Button(props) {
    return (
        <>
            <div className="bt_container">
                <div className={`button ${props.className}`}>
                    <p>{props.children}</p>
                </div>
            </div>
        </>
    );
}

export default Main;
