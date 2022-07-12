import React, { useEffect, useState } from 'react';
import TrendingCard from './TrendingCard';

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
                        <TrendingCard data={data} id={data.id} />
                    ))}
                </div>
                <div className="suggestions">
                    <h2>Populer Suggestions</h2>
                    <span>Ms. Marvel</span>
                    <span>Cara e Coragem</span>
                    <span>Pantanal</span>
                    <span>Além da Ilusão</span>
                    <span>Love in 40 Days</span>
                </div>
            </div>
        </div>
    );
}

export default TrendingDiv;
