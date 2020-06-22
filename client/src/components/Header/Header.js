import React from "react";
import logo from "../../imgs/logo.svg"
import "./style.css";

const Header = (props) => {
    return (
        <header className="header-container">
                <div className="header__banner">
                    <img className="header__logo" src={logo} alt="logo"></img>
                    <h1 className="header__text">
                        <span className="header__text-span">React</span> Google Books Search
                    </h1>
                </div>
                {props.children}
        </header>
    );
}

export default Header;