import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {detailsProduct} from './reducer/action/productListReducer'

function ProductScreen(props){
    console.log(`PROPSFORINDIVIUALPRODUCT`,props.match.params.id)
    const productDeatils = useSelector(state=>state.productDetails.productDetails)
    console.log(`[rrrrrrrrrrrr]`,productDeatils)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
    },[])
    return(
        <div>
            hello world 
            </div>
    )
}
export default ProductScreen;