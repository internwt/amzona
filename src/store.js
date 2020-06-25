import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetails} from './reducer/productListReducer'
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetails
})
const initialState ={}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer( applyMiddleware(thunk)))
export default store;