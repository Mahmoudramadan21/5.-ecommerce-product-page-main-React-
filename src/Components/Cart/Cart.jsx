import React from 'react'
import "./Cart.css"
import delImg from "../../Images/icon-delete.svg"
import itemImg from "../../Images/image-product-1-thumbnail.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Store/cartAction';

function Cart() {

    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

    return (
        <div className="cart">
            <h3>Cart</h3>
            <div className="cart-body">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => {
                        const itemTotal = (item.price * item.quantity).toFixed(2);
                        return (
                            <div key={index} className="cart-item">
                                <img src={itemImg} alt={item.name || 'Product Thumbnail'} className='cart-item-image' />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <div className="item-price">
                                        <p>${item.price} x {item.quantity}</p>
                                        <p className="cart-item-total">${itemTotal}</p>
                                    </div>
                                </div>
                                <button className="remove-item" onClick={() => dispatch(removeFromCart(item.name))}>
                                    <img src={delImg} alt="Remove icon" />
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                    </div>
                )}

                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;