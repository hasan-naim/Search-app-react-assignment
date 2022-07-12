import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react';
import SearchImg from '../assets/icons/search.svg';

function SearchBar({ setShowTrendingDiv, setText, text, clearInput }) {
    return (
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
    );
}

export default SearchBar;
