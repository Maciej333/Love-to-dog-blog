import React from 'react';
import { NavLinks } from '../components/Navbar/NavLinks';
import { Post } from '../components/Posts/Post';
import { PostHeader } from '../components/Posts/PostsHeader';

import useFetch from '../components/Hooks/UseFetch';

export const Posts = () => {


    return (
        <div className="blog">
            <PostHeader />
            <hr />
            <NavLinks color="#000" />
            <div className="welcome">

            </div>
            <main className="container">
                <section className="posts">
                    <h1>NAJNOWSZE WPISY</h1>
                    <hr />
                    <Post />
                </section>
                <section className="filters">
                    <h1>FILTRY</h1>
                    <hr />
                </section>
            </main>
        </div>
    )
}