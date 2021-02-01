import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [datas, setDatas] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    new Error("bad response");
                }
            })
            .then(item => setDatas(item))
            .catch(err => {
                console.error("ERROR fetching data");
            });
    }, [url]);
    return { datas };
}

export default useFetch;