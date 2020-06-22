import React from "react";
import "./style.css";

const Search = (props) => {
    
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                type="text" 
                className="search__input" 
                placeholder="Search for a book." 
            />
            <button className="search__btn">
        
            </button>
        </form>
    );
}

export default Search;