import React from 'react';
import { NavLinks } from '../components/Navbar/NavLinks';
import { Post } from '../components/Posts/Post';
import { PostHeader } from '../components/Posts/PostsHeader';

import useFetch from '../components/Hooks/UseFetch';

export const Posts = () => {

    const {datas: postArray} = useFetch("https://raw.githubusercontent.com/Maciej333/Love-to-dog-blog/master/src/components/Data/data_posts.json");

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
                    {postArray &&
                        postArray.map((item) => {
                            return <Post key={item.id} data={item} />
                        }) }
                </section>
                <section className="filters">
                    <h1>FILTRY</h1>
                    <hr />
                </section>
            </main>
        </div>
    )
}