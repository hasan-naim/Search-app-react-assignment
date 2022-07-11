import React, { useState } from 'react';
import SearchImg from '../assets/icons/search.svg';
import TrendingDiv from './TrendingDiv';

function Home() {
    // state for input feild
    const [text, setText] = useState('');

    // state for check clicking in the input feild
    const [showTrendingDiv, setShowTrendingDiv] = useState(false);
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
                    <img src={SearchImg} alt="" />
                </div>
                {showTrendingDiv && !text && <TrendingDiv />}
                {text && (
                    <div className="search-div">
                        <h1>searhing:</h1>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Home;
