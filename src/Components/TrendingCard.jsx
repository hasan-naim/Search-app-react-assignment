import React from 'react';

function TrendingCard({ data }) {
    return (
        <div className="gallery-width" key={data.id}>
            <div className="gallery-card">
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                <span className="title"> {data.title}</span>
            </div>
        </div>
    );
}

export default TrendingCard;
