import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PostImg } from './PostImg';
import { PostInfo } from './PostInfo';

export const Post = (props) => {

    const { id, img, tags, date, title, desc } = props.data;

    return (
        <StyledPost>
            <StyledNewPost isNew={props.data.new}>NEW</StyledNewPost>
            <PostImg imgSrc={img} />
            <StyledPostText>
                <PostInfo tags={tags} date={date} />
                <Link to={`/Love-to-dog-blog/posts/${id}`}>
                    <h2>{title}</h2>
                </Link>
                <p>{desc}</p>
            </StyledPostText>
        </StyledPost>
    )
}

const StyledPost = styled.article`
    position: relative;
    display: flex;
    width: 100%;
    margin: 50px 0;
    padding-bottom: 25px;
    border-bottom: 1px dashed #666;
`;

const StyledNewPost = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgb(118,9,121);
    background: linear-gradient(16deg, rgba(118,9,121,1) 12%, rgba(0,212,255,1) 100%); 
    top: -2.5%;
    left: -2.5%;
    border: 5px solid white;
    border-radius: 60px;
    display: ${props => props.isNew === "true" ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    color: #fff;
`;

const StyledPostText = styled.div`
    width: 60%;
    margin: 0;
    padding: 0 10px;
    font-size: 1rem;
    text-align: justify;

    a {
        color: #000;
    }

    @media screen and (min-width: 600px) {
        & {
            width: 70%;
        }
    }
`;