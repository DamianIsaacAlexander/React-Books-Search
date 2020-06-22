import React, { Fragment } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Nav from "../components/Nav/Nav";
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BookSearch = () => {
    return (
        <Fragment>
            <Wrapper>
                <Header>
                    <Search />
                </Header>
            </Wrapper>
            <Footer />
        </Fragment>
    );
}

export default BookSearch;