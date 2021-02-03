import React from 'react';

export const PostInfo = (props) => {

    const {tags, date} = props;

    return (
        <div className="post-info">
            <span className="post-tags">{tags.map((tag) => `#${tag} `)}</span>
            <span className="post-date">{date}</span>
        </div>
    )
}