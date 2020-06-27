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
import ViewMoreButton from "../components/Buttons/ViewMoreButton";
import SavedItemCard from "../components/SavedItemCard/SavedItemCard";
import bookReducer from "../hooks/bookReducer";
import io from "socket.io-client";
let socket;
let setTimer;
const BookSearch = () => {
    
    const initalState = {books: []};
    const resultStartingIndex = 0;
    const [state, dispatch] = useReducer(bookReducer, initalState);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentInputVal, setCurrentInputVal] = useState("");
    const [showItem, setShowItem] = useState({show: false, title: ""})
    const [lastTitle, setLastTitle] = useState("");

    const handleClick = (book) => {

        const {authors, publisher, publishedDate, title, imageLinks, description, infoLink} = book.volumeInfo;

        const newBook = {
           id: book.id,
           title: title, 
           authors: authors,
           description: description,
           publishedDate: publishedDate,
           publisher: publisher,
           infoLink: infoLink,
           imageLinks: imageLinks,
        }
        if(lastTitle !== title){
            API.saveBook(newBook).then(() => {setLastTitle(title)})
        }
       
    };

    useEffect(()  => {
        socket = io("http://localhost:3000/")
        return () => {
            socket.disconnect(); 
        }
    }, [])

    useEffect(() => {
        socket.emit("saved", lastTitle);
        socket.on("showSavedCard", (title) => {
            if(title){
                clearTimeout(setTimer);
                setShowItem({show: true, title: title});
                setTimer = setTimeout(() => {setShowItem({show: false, title: ""})}, 2000);
            }
        });
        return () => {
            socket.off();
        }
    }, [lastTitle])

    useEffect(() => {
        if(searchQuery){
            API.searchBook(searchQuery, resultStartingIndex)
            .then(({data}) => {
                dispatch({type: "setBooks", payload: data})
            });
        } 
        setCurrentIndex(resultStartingIndex);
        dispatch({type: "clear"})
    }, [searchQuery]);

    useEffect(() => {
        if(currentIndex > resultStartingIndex){
            API.searchBook(searchQuery, currentIndex)
            .then(({data}) => {
                dispatch({type: "setBooks", payload: data})
            });
        } 
    }, [currentIndex]);

    return (
        <Fragment>
            <Wrapper>
                {showItem.show && <SavedItemCard title={showItem.title}/>}
                <Header>
                    <Nav>
                        <Search
                            currentInputVal={currentInputVal}
                            setCurrentInputVal={setCurrentInputVal}
                            searchQuery={searchQuery} 
                            setSearchQuery={setSearchQuery} 
                        />
                    </Nav>
                </Header>
                <BookContainer containerTitle="Results" dispatch={dispatch}>
                    {state.books.map((book) => {
                        return (
                            <BookItem book={book} key={book.id}>
                                <a  rel="noopener noreferrer" target="_blank" href={book.volumeInfo.infoLink}><BookItemButton hover="btn-hover-blue" name="View"/></a>
                                <BookItemButton hover="btn-hover-blue" name="Save" handleClick={() => {handleClick(book)}}/>
                            </BookItem>
                        );
                    })}
                    {state.books.length > 0 && <ViewMoreButton currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>}
                </BookContainer>
            </Wrapper>
            <Footer />
        </Fragment>
    );
}

export default BookSearch;