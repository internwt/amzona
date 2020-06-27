import Axios from "axios"

const actionTypes = {
    PRODUCT_LIST_REQUEST: "PRODUCT_LIST_REQUEST",
    PRODUCT_LIST_SUCCESSS: "PRODUCT_LIST_SUCCESSS",
    PRODUCT_LIST_FAILURE: "PRODUCT_LIST_FAILURE",
    PRODUCT_DETAIL_REQUEST:'PRODUCT_DETAIL_REQUEST',
    PRODUCT_DETAIL_SUCCESSS:'PRODUCT_DETAIL_SUCCESSS',
    PRODUCT_DETAIL_FAILURE:'PRODUCT_DETAIL_FAILURE'
}

export { actionTypes }

export const itemLists = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST })
        const respose = await Axios.get('http://localhost:3001/products/items')
        console.log(`response=====>`, respose)
        dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESSS, payload: respose.data.products })

    } catch (err) {
        dispatch({ type: actionTypes.PRODUCT_LIST_FAILURE })
    }
}

export const detailsProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.PRODUCT_DETAIL_REQUEST })
        const respose = await Axios.get(`http://localhost:3001/products/details/${id}`)
        
        dispatch({ type: actionTypes.PRODUCT_DETAIL_SUCCESSS, payload: respose.data })
    } catch (error) {
        dispatch({ type: actionTypes.PRODUCT_DETAIL_FAILURE })
    }
}