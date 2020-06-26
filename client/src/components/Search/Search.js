import React, {useRef} from "react";
import "./style.css";

const Search = (props) => {
    
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputRef.current.value && inputRef.current.value !== props.searchQuery){
            props.setSearchQuery(inputRef.current.value);
        }
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text" 
                className="search__input" 
                placeholder="Search for a book." 
                ref={inputRef}
            />
        </form>
    );
}

export default Search;