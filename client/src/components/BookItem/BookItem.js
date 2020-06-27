import React from "react";
import"./style.css";

const BookItem = ({children, book}) => {
    const {authors, publisher, publishedDate,title, imageLinks, description} = book.volumeInfo ? book.volumeInfo : book;

    const unavailbeIMGURL = "http://via.placeholder.com/128x169.png/FFFFFF/00000/?text=NO+PREVIEW";

    const truncateString = (str, num) => {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
    }

    return  (
        <div className="book-item">
       
            <img className="book-item__img" src={imageLinks ? imageLinks.thumbnail : unavailbeIMGURL} alt={title}></img>
            <div className="book-item__description">
                <p className="book-item__title">{title ? title : "N/A"}</p>
                <p className="book-item__author">
                    {authors && authors.length >= 1 ? `Authors: ${authors.join(", ")}`:`Author: ${authors}`}
                </p>
                <p className="book-item__publish-info">{`${publisher ? publisher : "N/A"}, ${publishedDate && publishedDate}`}</p>
                <p className="book-item__synopsis">{description ? truncateString(description, 250) : "N/A"}</p>
                <div className="book-item__btn-container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BookItem;