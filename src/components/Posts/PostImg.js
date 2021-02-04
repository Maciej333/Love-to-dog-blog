import React from 'react';

export const PostImg = (props) => {

    const { imgSrc: img } = props;

    return (
        <div className="post-img" style={{ background: `url(${img}) no-repeat center center / cover`}}></div>
    )
}