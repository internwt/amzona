import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { productListReducer, productDetails } from './reducer/productListReducer'
import { cartReducer } from './reducer/cartReducer'
const cartItems = Cookie.getJSON('cartItems') || []
const initialState = { cartReducer: { cartItems } }

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetails,
    cartReducer: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;