import React from "react";
import"./style.css";

const BookItemButton = (props) => {
    return (
        <button className={`book-item__btn ${props.hover}`} onClick={props.handleClick}>{props.name}</button>
    );
}

export default BookItemButton;