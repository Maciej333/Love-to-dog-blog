import React from 'react';

export const PostPage = (props) => {

    if (props.data[0]) {
        const { img, tags, date, title, desc } = props.data[0];

        return (
            <div>
                Work
            </div>
        );
    } else {
        return (
            <div>
                Ups 404
            </div>
        )
    }
} 