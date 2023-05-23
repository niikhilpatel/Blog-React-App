import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src="https://avatars.githubusercontent.com/u/90297144?v=4" alt=""></img>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolores 
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sideBarList">
                <li className="sideBarListItem">Life</li>
                <li className="sideBarListItem">Music</li>
                <li className="sideBarListItem">Style</li>
                <li className="sideBarListItem">Sport</li>
                <li className="sideBarListItem">Tech</li>
                <li className="sideBarListItem">Cinema</li>
            </ul>

      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
            <i class="sideBarIcon fa-brands fa-facebook"></i>
            <i class="sideBarIcon fa-brands fa-twitter"></i>
            <i class="sideBarIcon fa-brands fa-pinterest"></i>
            <i class="sideBarIcon fa-brands fa-instagram"></i>

        </div>
      </div>
    </div>
  )
}
