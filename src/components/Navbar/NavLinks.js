import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinks = (props) => {
    return (
        <StyledLinks isCenter={props.isCenter} isPadding={props.isPadding}>
            <StyledLink to="/Love-to-dog-blog/" color={props.color}>Home</StyledLink>
            <StyledLink to="/Love-to-dog-blog/posts" color={props.color}>Posts</StyledLink>
            <StyledLink to="/Love-to-dog-blog/gallery" color={props.color}>Gallery</StyledLink>
        </StyledLinks>
    )
}

export const StyledLinks = styled.div`
    margin-left: auto;
    margin-right: ${props => props.isCenter ? "0px" : "25px"};
    padding-bottom: ${props => props.isPadding ? "50px" : "0px"};
    
    @media screen and (min-width: 500px) {
        & {
            font-size: 1.5rem;

            img {
                max-width: 150px;
            }
        }
    }
`;

const StyledLink = styled(Link)`
    margin-left: 20px;
    color: ${props => props.color ? props.color : "#fff"};

    @media screen and (min-width: 500px) {
        & {
            margin-right: 25px;
        }
    }
`;