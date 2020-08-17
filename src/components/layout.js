import React from "react";
import "../App.css";

export const Layout = (props) =>{
    return(
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}