import React from 'react';
import styled from 'styled-components';

export const Card = (props) => {

    const { url } = props;

    return (
        <StyledCard>
            <StyledCardImg imgUrl={url} />
        </StyledCard>
    )
}

const StyledCard = styled.div`
    justify-self: stretch;
    position: relative;
    height: 300px;
    background-color: #ccc;
    border-radius: 5%;
    box-shadow: 4px 4px 10px -4px rgba(0,0,0,0.75);
`;

const StyledCardImg = styled.div`
    background: url(${props => props.imgUrl}) no-repeat center center / cover;
    position: absolute;
    left: 4%;
    right: 4%;
    top: 4%;
    bottom: 15%;
    width: 90%;
    height: 81%;
    border-radius: 5%;
`;