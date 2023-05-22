// import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i class="topIcon fa-brands fa-facebook"></i>
            <i class="topIcon fa-brands fa-twitter"></i>
            <i class="topIcon fa-brands fa-pinterest"></i>
            <i class="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>

        <div className="topRight">
            <img className="topImg" src="https://avatars.githubusercontent.com/u/90297144?v=4" alt="">
            </img>
            <i class="TopSearchIcon fa-brands fa-searchengin"></i>
        </div>
    </div>
  )
}
