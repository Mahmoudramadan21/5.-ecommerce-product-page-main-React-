import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../Images/logo.svg"
import cart from "../../Images/icon-cart.svg"
import avatar from "../../Images/image-avatar.png"
import menu from "../../Images/icon-menu.svg"
import Cart from '../Cart/Cart'
import SideMenu from '../SideMenu/SideMenu'
import { useSelector } from 'react-redux'

function Navbar() {
    const { cartItems } = useSelector(state => state.cart);

    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <div className="container">

                <div className="logo-links-wrapper">
                    <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                        <img src={menu} alt="Menu" />
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
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
                <div className="cart-avatar-wrapper">
                    <div id='cart'>
                        <div className="cart-icon">
                            <img src={cart} alt="Cart" onClick={() => setOpenCart(!openCart)} />
                            {cartItems[0]?.quantity > 0 && (
                                <span className='cart-length'>{cartItems[0]?.quantity}</span>
                            )}
                        </div>
                        <div className="cart-wrapper">
                            {openCart && <Cart />}
                        </div>
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="Avatar" />
                    </div>
                </div>
            </div>
            <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
    )
}

export default Navbar;