import React from "react";
import "./style.css"
const SavedItemCard = (props) => {
    return (
        <div className="saved-card">
            <p className="saved-card__title"><span>Saved: </span>{props.title}</p>
        </div>
    );
}

export default SavedItemCard;