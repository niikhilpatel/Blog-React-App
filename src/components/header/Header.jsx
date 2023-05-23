import React from "react";
import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span>
                <span className="headerTitlesLg"> Blog</span>
            </div>
            <img className="headerImg" src="https://www.color-meanings.com/wp-content/uploads/small-emperor-moth-1536x1024.jpeg" alt=""></img>

        </div>
    )
}