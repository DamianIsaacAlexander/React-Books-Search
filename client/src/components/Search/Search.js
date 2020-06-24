import React, {useRef} from "react";
import "./style.css";

const Search = (props) => {
    
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputRef.current.value){
            props.setSearchQuery(inputRef.current.value);
            props.setHasSubmit(true);
        }
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text" 
                className="search__input" 
                placeholder="Search for a book." 
                ref={inputRef}
                onChange={(e) => {props.setSearchQuery(e.target.value)}}
                value={props.searchQuery}
            />
        </form>
    );
}

export default Search;