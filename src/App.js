import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './main_page/main';
import Home from './register_page/home';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
