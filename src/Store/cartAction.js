import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./constants"

export const addToCart = (item) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: item.quantity
            }
        })

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

    } catch (error) {
        console.error("There was an error adding the item to the cart:", error);
    }
}

export const removeFromCart = (name) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: name
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}