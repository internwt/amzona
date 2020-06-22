import React,{useEffect, useState} from 'react'
import data from './data'
import {Link,withRouter} from 'react-router-dom'
import Axios from 'axios'
import {itemLists} from './reducer/action/productListReducer'
import {useSelector, useDispatch} from 'react-redux'

function HomeScreen(props){
  const [product, setProducts] = useState([])
  const productList = useSelector(state =>state.productList)
  const {productItems,loading, error} = productList
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(itemLists())
    
  },[])
  console.log('prodict',product)
  const handleClick =(id) =>{
    props.history.push(`/products/${id}`,{parent:"hello worldD"})
  }
      
return loading ? <div>loading ....</div>:
(
           <ul className="products">
              {
                productItems.map((product) => {
                return  ( <li key={product.id}>
                    <div className="product">
                      <img className="product-image" src={product.image} alt="product" />
                      <div className="product-name">
                       <Link  onClick ={()=>handleClick(product.id)}>{product.name}</Link>
                      </div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">$ {product.price}</div>
                      <div className="product-rating">{product.star}Stars ({product.numReview})</div>
                    </div>
                  </li>
                )})
              }

            </ul>
)
}
export default withRouter(HomeScreen)