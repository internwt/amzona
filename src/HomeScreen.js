import React,{useEffect, useState} from 'react'
import data from './data'
import {Link,withRouter} from 'react-router-dom'
import Axios from 'axios'

function HomeScreen(props){
  const [product,setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async() =>{
    const res =  await Axios.get('http://localhost:3001/products/items')
    setProducts(res.data.products)
    }
    fetchData()
  },[])
  console.log(`setproducts`,product)
  const handleClick =(id) =>{
    props.history.push(`/products/${id}`,{parent:"hello worldD"})
  }
    return (
        <div>
           <ul className="products">
              {
                product.map((product) => {
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
            </div>
    )
}
export default withRouter(HomeScreen)