import React, { useEffect, useState } from 'react';
import { Card } from '../components/Gallery/Card';
import useFetch from '../components/Hooks/UseFetch';
import { NavLinks } from '../components/Navbar/NavLinks';
import { FetchError } from '../components/response/FetchError';
import { Spinner } from '../components/response/Spinner';

export const Gallery = () => {

    let i = 0;
    const [ableToFetch, setAbleToFetch] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    let { datas: galleryArray, error } = useFetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=18`);
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
        <div className="gallery" onScroll={handleScroll}>
            <h1>YOUR PHOTOS</h1>
            <hr />
            <NavLinks color="#000" />

            <div className="gallery-images" onScroll={handleScroll}>
                {
                    (galleryPictures.length > 0) && galleryPictures
                        .filter(picture => picture)
                        .map(picture => <Card key={i++} url={picture.download_url} />)
                }
            </div>
            <Spinner />
            {
                error &&
                <FetchError />
            }
        </div>
    );
}