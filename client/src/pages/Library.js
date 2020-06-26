import React, { Fragment, useEffect, useState, useReducer} from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper/Wrapper";
import Nav from "../components/Nav/Nav";
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BookContainer from "../components/BookContainer/BookContainer";
import BookItem from "../components/BookItem/BookItem";
import BookItemButton from "../components/Buttons/BookItemButton";
import bookReducer from "../hooks/bookReducer";


const BookSearch = () => {
    
    const initalState = {books: []};
    const [state, dispatch] = useReducer(bookReducer, initalState);
    const [searchQuery, setSearchQuery] = useState("");
    const [deletedBook, setDeletedBook] = useState(false);

    const handleClick = (id) => {
        API.deleteBook(id).then(() => {
            dispatch({type: "clearOne", id: id});
        });
    }
    
    useEffect(() => {
        API.getBooks().then(({data}) => {dispatch({type: "setBooks", payload: data})});
    }, [])

    return (
        <Fragment>
            <Wrapper>
                <Header>
                    <Nav>
                        <Search 
                            searchQuery={searchQuery} 
                            setSearchQuery={setSearchQuery} 
                        />
                    </Nav>
                </Header>
                <BookContainer containerTitle="Library" dispatch={dispatch}>
                    {state.books.map((book) => {
                        return (
                            <BookItem book={book}>
                                 <a target="_blank" href={book.infoLink}><BookItemButton hover="btn-hover-blue" name="View"/></a>
                                 <BookItemButton hover="btn-hover-red" name="Delete" handleClick={() => {handleClick(book._id)}}></BookItemButton>
                            </BookItem>
                        );
                    })}
                </BookContainer>
            </Wrapper>
            <Footer />
        </Fragment>
    );
}

export default BookSearch;