import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [datas, setDatas] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("bad response");
                }
            })
            .then(item => setDatas(item))
            .catch(err => {
                setError(true);
            });
    }, [url]);
    return { datas, error };
}

export default useFetch;