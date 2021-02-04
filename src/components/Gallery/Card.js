import React from 'react';

export const Card = (props) => {

    const { url } = props;
    return (
        <div className="card">
            <div className="card-img" style={{ background: `url(${url}) no-repeat center center / cover` }}></div>
        </div>
    )
}