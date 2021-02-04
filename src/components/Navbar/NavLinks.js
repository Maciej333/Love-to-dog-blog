import React from 'react';
import { Link } from 'react-router-dom';

export const NavLinks = (props) => {
    return (
        <div className="links">
            <Link to="/Love-to-dog-blog/" style={{ color: props.color }}>Home</Link>
            <Link to="/Love-to-dog-blog/posts" style={{ color: props.color }}>Posts</Link>
            <Link to="/Love-to-dog-blog/gallery" style={{ color: props.color }}>Gallery</Link>
        </div>
    )
}