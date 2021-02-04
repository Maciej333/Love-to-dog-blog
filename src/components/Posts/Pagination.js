import React from 'react';

export const Pagination = (props) => {

    const { active, totalPages, changePage } = props;

    const generateButton = (number) => {
        return <button className={(active === (number)) ? "active" : ""} key={number} onClick={() => changePage(number)}> {number} </button>;
    }

    const buttonsToDisplay = () => {
        return [...Array(totalPages).keys()].map(num => generateButton(num + 1));
    }

    return (
        <div className="pagination">
            {buttonsToDisplay()}
        </div>
    )
}