import React from 'react';
function Home() {
    return (
        <>
            <Header title="3.81mm"></Header>
        </>
    );
}

function Header(props) {
    return <h1>{props.title}</h1>;
}

export default Home;
