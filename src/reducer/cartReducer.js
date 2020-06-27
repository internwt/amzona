function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload
            const product = state.cartItems.find((x) => x.id == item.id)
            if (product) {
                return {
                    cartItems: state.cartItems.map((x) => x.id === product.id ? item : x)
                }
            }
            return { cartItems: [...state.cartItems, item] };

            case 'REMOVE_ITEM':
                return{
                    cartItems: state.cartItems.filter((id)=>id.id !== action.payload)
                }
        default:
           return state
    }
}

export { cartReducer }