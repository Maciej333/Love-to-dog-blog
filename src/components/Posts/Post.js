import React from 'react';
import { Link } from 'react-router-dom';

export const Post = (props) => {

    const { id, img, tags, date, title, desc } = props.data;

    return (
        <article className="post">
            <div className="post-new" style={{ display: props.data.new === "true" ? "flex" : "none" }}>NEW</div>
            <div className="post-img" style={{ background: `url(${img}) no-repeat center center / cover` }}></div>
            <div className="post-text">
                <div className="post-info">
                    <span className="post-tags">{tags.map((tag) => `#${tag} `)}</span>
                    <span className="post-date">{date}</span>
                </div>
                <Link to={`/Love-to-dog-blog/posts/${id}`} style={{ color: "#000" }}>
                    <h2>{title}</h2>
                </Link>
                <p>{desc}</p>
            </div>
        </article>
    )
}