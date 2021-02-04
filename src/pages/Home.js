import React from 'react';
import Navbar from '../components/Navbar/Navbar';

export const Home = () => {
    return (
        <div className="home">
            <Navbar color="#fff" />
            <div className="jumbotron">
                <h1>My goal is to share with You<br /> my passion to <span>Dogs!</span></h1>
            </div>
        </div>
    )
}