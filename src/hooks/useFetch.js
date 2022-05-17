import { useState, useEffect } from 'react';

function useFetch( url, options ) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (e) {
                console.log(e)
                setError(e);
                setLoading(false);
            }
        };

        fetchData()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { loading, error, data };

}

export default useFetch