import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import React, { useEffect, useRef, useState } from 'react';

function SearchResult({ text, searchData }) {
    const icon = useRef();
    // eslint-disable-next-line no-unused-vars
    const [redHeart, setRedHeart] = useState(false);
    // const handleClick = () => setRedHeart(true);
    // useEffect(() => {}, [redHeart]);
    useEffect(() => {
        console.log(icon.current);
    }, []);

    return (
        <div className="search-result">
            <h1>Search Result: {text}</h1>
            <div className="wrapper">
                {searchData?.map((data) => (
                    <div className="wrapper-width" key={data.id}>
                        <div className="search-card">
                            <div className="img-div">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                                    alt=""
                                />
                                <div className="hover-show center">
                                    <a href="www" className="view-more">
                                        View more
                                    </a>
                                </div>
                                {redHeart ? (
                                    <FavoriteSharpIcon
                                        className="heartIconRed"
                                        onClick={() => setRedHeart((prev) => !prev)}
                                    />
                                ) : (
                                    <FavoriteBorderSharpIcon
                                        className="heartIcon"
                                        onClick={() => setRedHeart((prev) => !prev)}
                                    />
                                )}
                            </div>

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
