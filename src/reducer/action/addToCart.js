import Axios from  'axios'
import Cookie from 'js-cookie'
export const addToCart = (id, qty) => async (dispatch,getState) => {
    try {
        const {data} = await Axios.get(`http://localhost:5000/products/details/${id}`)
        dispatch({type:"ADD_TO_CART",payload : {
            id: data.id,
            name:data.name,
            image: data.image,
            brand:data.brand,
            price:data.price,
            numReview:data.numReview,
            countInStock: data.countInStock,
            qty
        }})
        console.log(`getstate`,getState())
        const {cartReducer:{cartItems}} = getState()
        Cookie.set('cartItems',JSON.stringify(cartItems))


    } catch (error) {

    }
}

export const removeProductFromCart = (id) => async(dispatch,getState)=>{
    try {
        dispatch({type:'REMOVE_ITEM',payload:id})
        const {cartReducer:{cartItems}} = getState()
        Cookie.set('cartItems',JSON.stringify(cartItems))
    } catch (error) {
        
    }
}