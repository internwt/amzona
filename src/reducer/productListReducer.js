
function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading:true };
            case PRODUCT_LIST_SUCCESSS:
                return {
                    loading:false,
                    productItems : action.payload
                }
                case PRODUCT_LIST_FAILURE : 
                return { loading: false, error: action.payload.error}
                 default: 
                return  state
             
    }
}

export {productListReducer}