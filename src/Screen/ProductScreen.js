import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link } from 'react-router-dom'
import {detailsProduct} from '../reducer/action/productListReducer'

function ProductScreen(props){
  const [qty, setQty] =useState(1)
  const {loading,productDetails,error} = useSelector(state=>state.productDetails)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
    },[])

    function handleAddToCart(){
      props.history.push(`/cart/${props.match.params.id}?setQty=${qty}`)
    }
    return(
        <div>
            <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div> product not found </div>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={productDetails.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>productname</h4>
                </li>
                <li>
                  <a href="#reviews">
                    {/* <Rating
                      value={productDetails.rating}
                      text={product.numReviews + ' reviews'}
                    /> */}
                  </a>
                </li>
                <li>
                  Price: <b>'${productDetails.price}'</b>
                </li>
                <li>
                  Description:
                  {/* <div>'{product.description}'</div> */}
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                {/* <li>Price: '{product.price}'</li> */}
                <li>
                  Status:{' '}
                  'In Stock' 
                </li>
                <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(productDetails.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {productDetails.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="content-margined">
            <h2>Reviews</h2>
            {/* {!product.reviews.length && <div>There is no review</div>} */}
            <ul className="review" id="reviews">
              {/* {product.reviews.map((review) => (
                <li key={review._id}>
                  <div>{review.name}</div>
                  <div>
                    <Rating value={review.rating}></Rating>
                  </div>
                  <div>{review.createdAt.substring(0, 10)}</div>
                  <div>{review.comment}</div>
                </li>
              ))} */}
              <li>
                <h3>Write a customer review</h3>
                {/* {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                ) : (
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                )} */}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
    )
}
export default ProductScreen;