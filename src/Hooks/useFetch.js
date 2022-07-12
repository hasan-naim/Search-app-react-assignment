import { useEffect, useState } from 'react';

export default function useFetch(url, text) {
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [result, setResult] = useState(null);
    const [searchData, setSearchData] = useState(null);
    // useEffect(() => {
    //     async function requestFetch() {
    //         try {
    //             setLoading(true);
    //             setError(false);

    //             const response = await fetch(url);
    //             const data = await response.json();
    //             setLoading(false);
    //             setResult(data);
    //         } catch (err) {
    //             console.log(err);
    //             setLoading(false);
    //             setError(true);
    //         }
    //     }
    //     requestFetch();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [text]);

    useEffect(() => {
        if (text !== '') {
            const fetchData = async () => {
                const res = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=8192cc786ef61b56059ee40953b95ac1&language=en-US&query=${text}&page=1&include_adult=false`
                );
                const data = await res.json();
                setSearchData(
                    data.results.filter((movie) => movie.poster_path !== null && movie.release_date)
                );
            };
            fetchData();
        }
    }, [text]);

    return { searchData };
}
