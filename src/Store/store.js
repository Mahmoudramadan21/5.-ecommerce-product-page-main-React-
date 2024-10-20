import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Import thunk properly
import { cartReducer } from "./cartReducer"; // Your cart reducer

const rootReducer = combineReducers({
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;