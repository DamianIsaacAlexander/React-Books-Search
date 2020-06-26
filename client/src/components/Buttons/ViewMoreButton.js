import React from "react";
import"./style.css";

const ViewMoreButton = (props) => {

    const handleClick = () => {
        const prevousIndex = props.currentIndex;
        props.setCurrentIndex(prevousIndex + 10);
    }

    return (
        <button className="btn-view" onClick={handleClick}>View More<div className="btn-view__down-arrow"/></button>
    );
}

export default ViewMoreButton;