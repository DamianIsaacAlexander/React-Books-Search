import React from "react";
import "./style.css";

const Nav = (props) => {
    return (
        <nav>
            <ul className="nav__list">
                <li className="nav__list-item">
                    <a className="nav__list-link" href="/">Search</a>
                </li>
                <li className="nav__list-item">
                    <a className="nav__list-link" href="/library">Library</a>
                </li>
            </ul>
            {props.children}
        </nav>
    );
}

export default Nav;