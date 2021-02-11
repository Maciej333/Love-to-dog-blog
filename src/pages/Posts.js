import React, { useState } from 'react';
import { NavLinks } from '../components/Navbar/NavLinks';
import { Post } from '../components/Posts/Post';
import { PostHeader } from '../components/Posts/PostsHeader';
import { Spinner } from '../components/response/Spinner';
import { FetchError } from '../components/response/FetchError';
import { PostPage } from '../components/Posts/PostPage';
import { Pagination } from '../components/Posts/Pagination';
import { useParams } from 'react-router-dom';
import welcomeImg from '../images/welcome_pic.jpg'
import useFetch from '../components/Hooks/UseFetch';
import styled from 'styled-components';

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
            <StyledPosts>
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
            </StyledPosts>
            <StyledFilters>
                <h1>FILTRY</h1>
                <hr />
                <input
                    type="text"
                    value={searchTitle}
                    placeholder="Search title.."
                    onChange={changeSearchTitle}
                />
                <StyledFiltersTags>
                    {
                        TAGS_ARRAY.map(tag => <StyledFilterButton key={tag} value={tag} onClick={changeSearchTags} style={{ backgroundColor: (searchTag.includes(tag)) ? "rgb(30, 205, 217)" : '#fff' }}>#{tag}</StyledFilterButton>)
                    }
                </StyledFiltersTags>
            </StyledFilters>
        </>;
    }

    const singleBlogPost = () => {
        return <>
            {
                postArray && <PostPage data={postArray.filter(post => (post.id === urlPostId))} />
            }
        </>;
    }

    return (
        <StyledBlog>
            <PostHeader>
                POZNAJ LEPIEJ SWOJEGO PSA!
            </PostHeader>
            <hr />
            <NavLinks color="#000" isCenter={true} isPadding={false} />
            {
                !urlPostId && <Welcome />
            }
            <MainContainer>
                {!urlPostId ?
                    allBlogPost()
                    :
                    singleBlogPost()
                }
            </MainContainer>
        </StyledBlog>
    )
}

const StyledPosts = styled.section`
    border-radius: 50px;
    width: 90%;
    max-width: 1000px;
    height: 80%;
    text-align: left;

    & h1 {
        text-align: center;
    }

    @media screen and (min-width: 600px) {
        & {
            width: 60%;
        }
    }
`;

const StyledFilters = styled.section`
    width: 96%;
    height: 80%;
    max-width: 600px;
    text-align: left;

    @media screen and (min-width: 600px) {
        & {
            margin-left: 2%;
            width:20%;
        }
    }
`;

const StyledFiltersTags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 600px) {
        & {
            flex-direction: column;
            justify-content: flex-start;
            max-width: 80px;
        }
    }
`;

const StyledFilterButton = styled.button`
    margin: 20px 0;
    padding: 5px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        transform: scale(1.05);
    }
`;

const StyledBlog = styled.div`
    min-height: 100vh;
    position: relative;
    height: 100%;
    text-align: center;
    color: #000;
`;

const Welcome = styled.div`
    margin: 20px 0;
    height: 200px;
    width: 100%;
    background: linear-gradient(to right, rgba(30,205,217,0.3), rgba(255,255,255,0.7), rgba(255,255,255,0.4)),url(${welcomeImg});
    background-position: bottom center;
    background-size: cover;
    background-attachment: fixed;

    @media screen and (min-width: 600px) {
        & {
            height: 400px;
        }
    }
`;

const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 600px) {
        & {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
        }
    }
`;