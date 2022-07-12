import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { useEffect, useState } from 'react';
import SearchImg from '../assets/icons/search.svg';
import TrendingDiv from './TrendingDiv';

function Home() {
    // state for input feild
    const [text, setText] = useState('');

    // state for check clicking in the input feild
    const [showTrendingDiv, setShowTrendingDiv] = useState(false);

    const [searchData, setSearchData] = useState(null);

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

    const clearInput = () => {
        setText('');
    };

    return (
        <section className={`home ${!text && `img`}`}>
            <div className="container">
                <div className="div-input">
                    <input
                        type="text"
                        placeholder="Search"
                        onFocus={() => setShowTrendingDiv(true)}
                        // onBlur={() => setShowTrendingDiv(false)}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    {text !== '' ? (
                        <CloseRoundedIcon className="closeIcon" onClick={clearInput} />
                    ) : (
                        <img src={SearchImg} alt="" />
                    )}
                </div>
                {showTrendingDiv && !text && <TrendingDiv />}
                {text && (
                    <div className="search-result">
                        <h1>Search Result: {text}</h1>
                        <div className="wrapper">
                            {searchData?.map((data) => (
                                <div className="wrapper-width" key={data.id}>
                                    <div className="search-card">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
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
                )}
            </div>
        </section>
    );
}

export default Home;
