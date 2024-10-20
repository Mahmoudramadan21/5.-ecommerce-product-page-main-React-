import React from 'react'
import "./SideMenu.css"
import closeMenu from "../../Images/icon-close.svg"

function SideMenu({ openMenu, setOpenMenu }) {
    return (
        <div className={`side-menu ${openMenu ? "open" : ""}`}>
            <div className="close-menu" onClick={() => setOpenMenu(!openMenu)}>
                <img src={closeMenu} alt="Close menu" />
            </div>
            <ul className="links">
                <li>
                    <a href="#">Collections</a>
                </li>
                <li>
                    <a href="#">Men</a>
                </li>
                <li>
                    <a href="#">Women</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;