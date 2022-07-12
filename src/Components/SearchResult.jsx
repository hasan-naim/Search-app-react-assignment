import React from 'react';

function SearchResult({ text, searchData }) {
    return (
        <div className="search-result">
            <h1>Search Result: {text}</h1>
            <div className="wrapper">
                {searchData?.map((data) => (
                    <div className="wrapper-width" key={data.id}>
                        <div className="search-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                                alt=""
                            />
                            <span className="title">
                                {data.title} ({data.release_date.slice(0, 4)})
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResult;
