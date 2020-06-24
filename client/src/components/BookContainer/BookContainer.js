import React from "react";
import DropDownButton from "../Buttons/DropDownButton";
import ViewMoreButton from "../Buttons/ViewMoreButton";
import"./style.css";

const BookContainer = (props) => {
    return  (
        <div className="book-container">
            <div className="book-container__header-wrapper">
            <h2 className="book-container__header-title">{props.containerTitle}</h2>
                <DropDownButton />
            </div>
            <div className="book-container__header-rule" />
            {props.children}
            <ViewMoreButton />
        </div>
    );
}

export default BookContainer;