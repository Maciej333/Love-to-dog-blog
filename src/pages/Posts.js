import React, { useState } from 'react';
import { NavLinks } from '../components/Navbar/NavLinks';
import { Post } from '../components/Posts/Post';
import { PostHeader } from '../components/Posts/PostsHeader';
import { Spinner } from '../components/response/Spinner';
import { FetchError } from '../components/response/FetchError';
import { PostPage } from '../components/Posts/PostPage';
import { Pagination } from '../components/Posts/Pagination';
import { useParams } from 'react-router-dom';
import useFetch from '../components/Hooks/UseFetch';

export const Posts = (props) => {

    const { id: urlPostId } = useParams();

    const POST_PER_PAGE = 8;
    const [pageNr, setPage] = useState(1);
    const { datas: postArray, error } = useFetch("https://raw.githubusercontent.com/Maciej333/Love-to-dog-blog/master/src/Data/data_posts.json");

    const TAGS_ARRAY = ["relation", "health", "young", "eat", "bauty", "event"]
    const [searchTitle, setSearchTitle] = useState("")
    const [searchTag, setSearchTag] = useState("");

    const changeSearchTitle = (event) => {
        const { value } = event.target;
        setSearchTitle(value.trimStart().toLowerCase());
        setPage(1);
    }

    const changeSearchTags = (event) => {
        const { value } = event.target;
        setSearchTag(prevState => {
            if (prevState.includes(value)) {
                return "";
            } else {
                return value;
            }
        });
        setPage(1);
    }

    const changePage = (nr) => {
        setPage(nr);
    }

    const allBlogPost = () => {
        return <>
            <section className="posts">
                <h1>NAJNOWSZE WPISY</h1>
                <hr />
                {postArray ?
                    postArray
                        .filter(post => post.title.toLowerCase().includes(searchTitle))
                        .filter(post => {
                            if (searchTag) {
                                return post.tags.includes(searchTag);
                            }
                            return true;
                        })
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
                <Pagination
                    active={pageNr}
                    totalPages={postArray ?
                        Math.ceil(postArray
                            .filter(post => post.title.toLowerCase().includes(searchTitle))
                            .filter(post => {
                                if (searchTag) {
                                    return post.tags.includes(searchTag);
                                }
                                return true;
                            })
                            .length / POST_PER_PAGE)
                        :
                        0}
                    changePage={changePage}
                />
            </section>
            <section className="filters">
                <h1>FILTRY</h1>
                <hr />
                <input
                    type="text"
                    value={searchTitle}
                    placeholder="Search title.."
                    onChange={changeSearchTitle}
                />
                <div className="filters-tags">
                    {
                        TAGS_ARRAY.map(tag => <button key={tag} value={tag} onClick={changeSearchTags} style={{ backgroundColor: (searchTag.includes(tag)) ? "rgb(30, 205, 217)" : '#fff' }}>#{tag}</button>)
                    }
                </div>
            </section>
        </>;
    }

    const singlePost = () => {
        return <>
            {
                postArray && <PostPage data={postArray.filter(post => (post.id === urlPostId))} />
            }
        </>;
    }

    return (
        <div className="blog">
            <PostHeader />
            <hr />
            <NavLinks color="#000" />
            {
                !urlPostId && <div className="welcome"></div>
            }
            <main className="container">
                {!urlPostId ?
                    allBlogPost()
                    :
                    singlePost()
                }
            </main>
        </div>
    )
}