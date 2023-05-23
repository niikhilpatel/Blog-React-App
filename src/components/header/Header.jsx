import React from "react";
import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span>
                <span className="headerTitlesLg"> Blog</span>
            </div>
            <img className="headerImg" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt=""></img>

        </div>
    )
}