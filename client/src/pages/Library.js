import React, { Fragment } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Nav from "../components/Nav/Nav";
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BookContainer from "../components/BookContainer/BookContainer";
import BookItem from "../components/BookItem/BookItem";

const Library = () => {
    return (
        <Fragment>
            <Wrapper>
                <Header>
                    <Nav>
                        <Search />
                    </Nav>
                </Header>
                <BookContainer containerTitle="Library">
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </BookContainer>
            </Wrapper>
            <Footer/>
        </Fragment>
    );
}

export default Library;