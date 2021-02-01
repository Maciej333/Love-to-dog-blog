import React from 'react';
import Navbar from '../components/Navbar';

export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="jumbotron">
                <h1>My goal is to share with You<br /> my passion to <span>Dog!</span></h1>
            </div>
        </div>
    )
}