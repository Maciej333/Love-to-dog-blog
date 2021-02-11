import React from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';


export const NotFound = () => {

    const history = useHistory();

    const handleClick = () => {
        history.go(-1);
    }

    return (
        <PageNotFound>
            <p>Ups 404, page not found</p>
            <p>You can come back to previous page by the button down bellow</p>
            <button onClick={handleClick}>BACK</button>
        </PageNotFound>
    )
}

const PageNotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #B80f0A;
    font-size: 1.5rem;

    p:first-child {
        font-size: 2.25rem;
    }

    button {
        box-shadow: none;
        background: transparent;
        border: 2px solid black;
        border-radius: 5px;
    }
`;