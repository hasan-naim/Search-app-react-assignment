import React, { useState } from 'react';
import useFetch from '../Hooks/useFetch';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import TrendingDiv from './TrendingDiv';

function Home() {
    // state for input feild
    const [text, setText] = useState('');

    // state for check clicking in the input feild
    const [showTrendingDiv, setShowTrendingDiv] = useState(false);

    // fetching data with api
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;
    const { searchData } = useFetch(apiUrl, text);

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
