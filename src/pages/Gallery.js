import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Gallery/Card';
import useFetch from '../components/Hooks/UseFetch';
import { NavLinks } from '../components/Navbar/NavLinks';
import { FetchError } from '../components/response/FetchError';
import { Spinner } from '../components/response/Spinner';

export const Gallery = () => {

    let i = 0;
    const [ableToFetch, setAbleToFetch] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    let { datas: galleryArray, error } = useFetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=12`);
    const [galleryPictures, setGaleryPictures] = useState([]);

    useEffect(() => {
        galleryArray && setGaleryPictures(prevState => [...prevState, ...galleryArray]);
        setAbleToFetch(true);
    }, [galleryArray])

    const handleScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
        if (scrollTop > scrollHeight - clientHeight - 200 && ableToFetch) {
            setPageNumber(prevState => prevState + 1);
            setAbleToFetch(false);
        }
    }

    return (
        <StyledGallery onScroll={handleScroll}>
            <h1>YOUR PHOTOS</h1>
            <hr />
            <NavLinks color="#000" isCenter={true} isPadding={true} />

            <StyledGalleryImages>
                {
                    (galleryPictures.length > 0) && galleryPictures
                        .filter(picture => picture)
                        .map(picture => <Card key={i++} url={picture.download_url} />)
                }
            </StyledGalleryImages>
            <Spinner />
            {
                error &&
                <FetchError />
            }
        </StyledGallery>
    );
}

const StyledGallery = styled.div`
    position: relative;
    text-align: center;
    height: 100vh;
    overflow-y: auto;

    h1 {
        font-size: 3rem;
    }
`;

const StyledGalleryImages = styled.div`
    margin: 0 auto;
    padding-bottom: 25px;
    width: 92%;
    display: grid;
    grid-template-columns: repeat(1fr);
    gap: 25px;

    @media screen and (min-width: 600px) {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 1024px) {
        & {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1200px;
        }
    }
`;