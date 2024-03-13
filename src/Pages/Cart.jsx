import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import addwish from '../image/addwish.gif'
import './Cart.css'



function Cart() {

  const cartArray = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    } else {
      setTotal(0)
    }
  }
  useEffect(() => {
    getCartTotal()
  }, [cartArray])

  const handleCart = () => {
    dispatch(emptyCart())
    alert("Order placed successfully, Thankyou for purchasing")
    navigate('/')
  }

  return (

    <div className='container' style={{ marginTop: '100px' }}>
      {
        cartArray.length > 0 ?
          <div className='row mt-5'>
            <div className="col-lg-8">

              <table className='table custom-shadow border-dark'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>product</th>
                    <th>product image</th>
                    <th>price</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((products, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{products.title}</td>
                        <td> <img width={'100px'} height={'100px'} src={products.thumbnail} alt='' /></td>
                        <td>{products.price}</td>
                        <td><button className='btn btn-primary' onClick={() => dispatch(removeFromCart(products.id))}><i className='fa-solid fa-trash text-danger '></i></button></td>
                      </tr>
                    ))

                  }
                </tbody>
              </table>
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div className="border mt-3 rounded shadow p-2 w-100">
                <h2 className='text-primary'>Cart Summary</h2>
                <h4>Total Products:<span>{cartArray.length}</span></h4>
                <h4 className='mt-3'>Total: <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
                <div className="d-grid">
                  <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check Out</button>
                </div>

              </div>
            </div>
          </div> : (<div><h3 className='d-flex flex-column justify-content-center align-items-center'><b>Cart is empty!!!</b></h3> 
                  
            
            
              <div style={{ height: '400px',width:'400px'}} className='mt-2 w-100 d-flex flex-column justify-content-center align-items-center' >
              <div style={{overflowY:'hidden'}} ><Link to={'/'} style={{ textDecoration: 'none'}} className='btn mb-3 btn-danger rounded  '>Back to Home</Link></div>

                <img height={'400px'} width={'400px'} src="https://cdn.dribbble.com/users/249246/screenshots/2958948/shopping.gif" alt="" />

              </div>
            
          
          </div>)
      }
    </div>
  )
}

export default Cart