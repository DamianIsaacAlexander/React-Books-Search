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
const BookSearch = () => {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [hasSubmit, setHasSubmit] = useState(false);

    useEffect(() => {
        if(hasSubmit){
            setHasSubmit(false);
        }
    }, [hasSubmit]);

    return (
        <Fragment>
            <Wrapper>
                <Header>
                    <Nav>
                        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} setHasSubmit={setHasSubmit}/>
                    </Nav>
                </Header>
                <BookContainer containerTitle="Results">
                    <BookItem>
                        <BookItemButton name="View Book"/>
                        <BookItemButton name="Save Book"/>
                    </BookItem>
                </BookContainer>
            </Wrapper>
            <Footer />
        </Fragment>
    );
}

export default BookSearch;