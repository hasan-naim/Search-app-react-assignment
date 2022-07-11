import React, { useState } from 'react';
import SearchImg from '../assets/icons/search.svg';
import TrendingDiv from './TrendingDiv';

function Home() {
    const [showTrendingDiv, setShowTrendingDiv] = useState(false);
    return (
        <section className="home">
            {/* <div className="overlay" /> */}
            <div className="container">
                <div className="div-input">
                    <input
                        type="text"
                        placeholder="Search"
                        onFocus={() => setShowTrendingDiv(true)}
                        // onBlur={() => setShowTrendingDiv(false)}
                    />
                    <img src={SearchImg} alt="" />
                </div>
                {showTrendingDiv ? <TrendingDiv /> : ''}
            </div>
        </section>
    );
}

export default Home;
