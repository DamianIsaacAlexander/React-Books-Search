import React from "react";
import"./style.css";
const Wrapper = (props) => {
    return (
        <main className="wrapper">
            <div className="wrapper__background">
            
            </div>
            {props.children}
        </main>
    );
}

export default Wrapper;