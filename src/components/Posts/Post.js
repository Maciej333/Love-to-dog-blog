import React from 'react';
import { Link } from 'react-router-dom';
import { PostImg } from './PostImg';
import { PostInfo } from './PostInfo';

export const Post = (props) => {

    const { id, img, tags, date, title, desc } = props.data;

    return (
        <article className="post">
            <div className="post-new" style={{ display: props.data.new === "true" ? "flex" : "none" }}>NEW</div>
            <PostImg imgSrc={img} />
            <div className="post-text">
                <PostInfo tags={tags} date={date} />
                <Link to={`/Love-to-dog-blog/posts/${id}`} style={{ color: "#000" }}>
                    <h2>{title}</h2>
                </Link>
                <p>{desc}</p>
            </div>
        </article>
    )
}