import React from 'react';
import { Link } from 'react-router-dom';

export const Post = () => {
    return (
        <article className="post">
            <div className="post-new">NEW</div>
            <div className="post-img"></div>
            <div className="post-text">
                <div className="post-info">
                    <span className="post-tags">#health #relation</span>
                    <span className="post-date">01.02.2021</span>
                </div>
                <Link to="" style={{ color: "#000" }}>
                    <h2>NAZWA WPISU</h2>
                </Link>
                <p>lorema amamaadbnamb sdnavbka sgkdahlhal lorema amamaa dbnambsd navbkasg kdahlhal lorema amamaadb nambsdn avb kasgkdahl hallorema amamaad bnambs dnav bkasgk dahlhal lorema amama adbnambsd navbkas gkdahlhal lorema amamaa dbnambsd navbkasgkd ahlhal</p>
            </div>
        </article>
    )
}