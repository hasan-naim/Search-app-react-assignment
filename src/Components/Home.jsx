import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
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
                <SearchBar
                    setShowTrendingDiv={setShowTrendingDiv}
                    setText={setText}
                    text={text}
                    clearInput={clearInput}
                />
                {showTrendingDiv && !text && <TrendingDiv />}
                {text && <SearchResult text={text} searchData={searchData} />}
            </div>
        </section>
    );
}

export default Home;
