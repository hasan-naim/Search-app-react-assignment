import React from 'react';
import SearchImg from '../assets/icons/search.svg';

function SearchInput() {
    return (
        <div className="container">
            <div className="div-input">
                <input type="text" placeholder="Search" />
                <img src={SearchImg} alt="" />
            </div>
        </div>
    );
}

export default SearchInput;
