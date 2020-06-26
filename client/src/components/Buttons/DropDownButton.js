import React from "react";
import"./style.css";

const DropDownButton = (props) => {
    return (
        <div className="dropdown-menu">
            <button className="dropdown__btn">Sort By</button>
            <div className="dropdown__content">
                <button className="dropdown__option-btn" onClick={() => {props.dispatch({type: "sortByTitle"})}}>Title</button>
                <button className="dropdown__option-btn" onClick={() => {props.dispatch({type: "sortByDate"})}}>Date</button>
            </div>
        </div>
    );
}

export default DropDownButton;