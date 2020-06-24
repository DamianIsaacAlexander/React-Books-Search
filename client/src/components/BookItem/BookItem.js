import React from "react";
import"./style.css";

const BookItem = (props) => {
    return  (
        <div className="book-item">
            <img className="book-item__img" src="http://books.google.com/books/content?id=161QAAAAMAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api" alt="book cover"></img>
            <div className="book-item__description">
                <p className="book-item__title">The Programming Language</p>
                <p className="book-item__author"><span>Authors</span> Mark James</p>
                <p className="book-item__synopsis">Introduces the features of the C programming language, discusses data types, variables, operators, control flow, functions, pointers, arrays, and structures, and looks at the UNIX system interface</p>
                <div className="book-item__btn-container">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default BookItem;