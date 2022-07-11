import React, { useEffect, useState } from 'react';

function TrendingDiv() {
    const [trendingData, setTrendingData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://api.themoviedb.org/3/trending/movie/week?api_key=8192cc786ef61b56059ee40953b95ac1'
            );
            const data = await res.json();
            setTrendingData(data.results.slice(0, 5));
        };
        fetchData();
    }, []);

    return (
        <div className="trending-div">
            <div className="trending-div-inner">
                <h2>Latest Movies</h2>
                <div className="gallery">
                    {trendingData?.map((data) => (
                        <div className="gallery-width" key={data.id}>
                            <div className="gallery-card">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                                    alt=""
                                />
                                <span className="title"> {data.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TrendingDiv;
