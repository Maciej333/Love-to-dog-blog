import React from 'react';
import styled from 'styled-components';

export const PostImg = styled.div`
    border-radius: 25px;
    width: 40%;
    min-height: 200px;
    max-height: 300px;
    background: url(${props => props.imgSrc}) no-repeat center center / cover;

    @media screen and (min-width: 600px) {
        & {
            width: 30%;
            min-height: 300px;
        }
    }
`;