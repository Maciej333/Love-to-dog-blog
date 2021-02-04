import React from 'react';
import { useHistory } from 'react-router-dom'


export const NotFound = () => {

    const history = useHistory();

    const handleClick = () => {
        history.go(-1);
    }

    return (
        <div className="page-not-found">
            <p>Ups 404, page not found</p>
            <p>You can come back to previous page by the button down bellow</p>
            <button onClick={handleClick}>BACK</button>
        </div>
    )
}