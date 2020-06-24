import React from "react";
import"./style.css";

const DropDownButton = () => {
    return (
        <div className="dropdown-menu">
            <button className="dropdown__btn">Sort</button>
            <div className="dropdown__content">
                <button className="dropdown__option-btn">Author</button>
                <button className="dropdown__option-btn">Title</button>
            </div>
        </div>
    );
}

export default DropDownButton;