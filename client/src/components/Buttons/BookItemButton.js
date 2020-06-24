import React from "react";
import"./style.css";

const BookItemButton = (props) => {
    return (
        <button className="book-item__btn">{props.name}</button>
    );
}

export default BookItemButton;