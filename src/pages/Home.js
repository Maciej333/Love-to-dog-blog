import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import BackgroundImg from '../images/background.jpg';

export const Home = () => {
    return (
        <StyledHome>
            <Navbar color="#fff" />
            <StyledNavJumbotron>
                <h1>My goal is to share with You<br /> my passion to <span>Dogs!</span></h1>
            </StyledNavJumbotron>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    position: relative;
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${BackgroundImg}); 
    background-position: top center;
    background-size: cover;
    height: 100vh;
`;

const StyledNavJumbotron = styled.div`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    position: absolute;
    width: 90%;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    box-shadow: 9px 10px 0px -3px rgba(30,205,217,0.3);

    & span {
        color:rgb(30, 205, 217);
    }

    @media screen and (min-width: 500px) {
        & {
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 800px) {
        & {
            padding-right: 20px;
            width: auto;
            font-size: 2rem;
        }
    }
`;