import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./constants";

export const cartReducer = (state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.name === item.name)

            if (existItem) {
                return {
                    cartItems: state.cartItems.map(x =>
                        x.name === existItem.name ? item : x
                    )
                }
            } else {
                return {
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                cartItems: state.cartItems.filter(x => x.name !== action.payload)
            }

        default:
            return state;
    }
}