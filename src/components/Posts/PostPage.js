import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PostImg } from './PostImg';
import { PostInfo } from './PostInfo';

export const PostPage = (props) => {

    if (props.data[0]) {
        const { img, tags, date, title, desc } = props.data[0];

        return (
            <StyledPostPage>
                <h1>{String(title).toUpperCase()}</h1>
                <div style={{ display: 'flex' }}>
                    <PostImg imgSrc={img} />

                    <StyledPostText>
                        <PostInfo tags={tags} date={date} />
                        <p>{desc}</p>
                    </StyledPostText>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra, erat id imperdiet malesuada, lorem leo eleifend nisl, sed tristique nisi ligula eget sem. Praesent sed sagittis odio. Pellentesque cursus risus vitae nunc vehicula, vel vulputate eros ultrices. Pellentesque sollicitudin sodales egestas. Integer non tincidunt mi. Proin malesuada, libero eget tincidunt posuere, ipsum nunc dapibus orci, vitae semper sapien arcu sed enim. Nullam euismod justo in neque sodales viverra. Morbi pharetra condimentum ipsum elementum luctus. Vestibulum ac mi ac odio dignissim interdum nec vel erat. Quisque nisi arcu, feugiat id libero sit amet, dapibus condimentum nulla. Aliquam tristique odio augue, non sagittis justo bibendum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla at enim sit amet diam facilisis ornare.</p>
                <p>Curabitur dictum, diam sed vestibulum maximus, ipsum augue egestas diam, sed fermentum erat sapien non ligula. Morbi sit amet eleifend dolor. Nullam dapibus molestie ex vitae semper. Nullam dignissim blandit ex, at tempor turpis consectetur at. Aenean eget interdum risus. Maecenas eleifend, neque quis pulvinar pharetra, leo magna vehicula felis, et cursus quam elit at massa. In in nulla sollicitudin, fermentum lectus nec, finibus ipsum.</p>
                <Link to="/Love-to-dog-blog/posts">
                    Back to all posts
                </Link>
            </StyledPostPage>
        );
    } else {
        return (
            <StylePostNotFound>
                Ups 404, Post not found
            </StylePostNotFound>
        )
    }
}

const StyledPostPage = styled.div`
    position: relative;
    padding: 100px 0;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;

    h1 {
        font-size: 2rem;
    }

    a {
        color: #fff;
        position: absolute;
        font-size: 1rem;
        bottom: 0;
        right: 0;
        padding: 10px;
        background-color: rgb(30, 205, 217);
        border-radius: 25px;
        margin-bottom: 50px;
    }

    p {
        text-indent: 1.5em;
        margin-top: 25px;
        text-align: justify;
    }
`;

const StyledPostText = styled.div`
    width: 60%;
    margin: 0;
    padding: 0 10px;
    font-size: 1rem;
    text-align: justify;

    @media screen and (min-width: 600px) {
        width: 70%;
    }
`;

const StylePostNotFound = styled.div`
    font-size: 2rem;
    color: #B80f0A;
    margin: 100px 0;
`;