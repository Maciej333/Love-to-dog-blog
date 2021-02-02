import React, { useState } from 'react';
import { NavLinks } from '../components/Navbar/NavLinks';
import { Post } from '../components/Posts/Post';
import { PostHeader } from '../components/Posts/PostsHeader';
import { Spinner } from '../components/response/Spinner';
import { FetchError } from '../components/response/FetchError';

import useFetch from '../components/Hooks/UseFetch';
import { Pagination } from '../components/Posts/Pagination';

export const Posts = () => {

    const POST_PER_PAGE = 8;
    const [pageNr, setPage] = useState(1);
    const { datas: postArray, error } = useFetch("https://raw.githubusercontent.com/Maciej333/Love-to-dog-blog/master/src/Data/data_posts.json");

    const changePage = (nr) => {
        setPage(nr);
        console.log("numer", nr)
    }

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
                    {postArray ?
                        postArray
                            .sort((post1, post2) => {
                                return new Date(post2.date) - new Date(post1.date);
                            })
                            .slice((pageNr - 1) * POST_PER_PAGE, ((pageNr - 1) * POST_PER_PAGE) + POST_PER_PAGE)
                            .map((post) => {
                                return <Post key={post.id} data={post} />
                            })
                        :
                        error ?
                            <FetchError />
                            :
                            <Spinner />
                    }
                    <Pagination active={pageNr} totalPages={postArray ? Math.ceil(postArray.length / POST_PER_PAGE) : 0} changePage={changePage} />
                </section>
                <section className="filters">
                    <h1>FILTRY</h1>
                    <hr />
                </section>
            </main>
        </div>
    )
}