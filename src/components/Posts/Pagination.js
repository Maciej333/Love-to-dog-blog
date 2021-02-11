import React from 'react';
import styled from 'styled-components';

export const Pagination = (props) => {

    const { active, totalPages, changePage } = props;

    const generateButton = (number) => {
        return <StyledPaginationButton isActive={active === number ? "active" : ""} key={number} onClick={() => changePage(number)}>{number}</StyledPaginationButton>
    }

    const buttonsToDisplay = () => {
        return [...Array(totalPages).keys()].map(num => generateButton(num + 1));
    }

    return (
        <StyledPagination>
            {buttonsToDisplay()}
        </StyledPagination>
    )
}

const StyledPagination = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

const StyledPaginationButton = styled.button`
    margin: 0 5px;
    padding: 5px;
    background-color: ${props => props.isActive ? "rgb(118,9,121)" : "rgb(30, 205, 217)"};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;