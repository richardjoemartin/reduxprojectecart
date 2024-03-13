import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import addwish from '../image/addwish.gif'


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wish)
  const dispatch = useDispatch()
  const handleWishListCart=(products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishList(products.id))
  }
  return (

    <Row>
      {
        wishlistArray.length > 0 ?
          wishlistArray.map((products, index) => (
            <Col key={index} className='mt-5 ms-5' sm={12} lg={4} xl={3}>

              <Card className='custom-shadow rounded mt-5' style={{ marginLeft: '0px', width: '18rem', height: '35rem' }}>
                <Card.Img style={{ height: '300px' }} variant="top" src={products.thumbnail} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '13px' }}><b>{products.title}</b></Card.Title>
                  <Card.Text>
                    {products.description.slice(0, 45)}...
                  </Card.Text>

                  <p>  $ {products.price}</p><br /><br />




                  <div className='d-flex justify-content-between '>
                    <button onClick={() => dispatch(removeFromWishList(products.id))} className='btn btn-dark' ><i className='fa-solid fa-heart text-danger '></i></button>
                    <button onClick={()=>handleWishListCart(products)} className='btn btn-dark'><i className='fa-solid fa-cart-shopping text-success '></i></button>

                  </div> 
                </Card.Body>
              </Card>
              <br />
            </Col>

          )) : (<div style={{marginTop:'10px'}}><h3 className='d-flex mt-5 flex-column justify-content-center align-items-center'><b>Wishlist is empty!!!</b></h3> 
                  
            
            
          <div style={{ height: '400px',width:'400px'}} className='mt-2 w-100 d-flex flex-column justify-content-center align-items-center' >
          <div style={{overflowY:'hidden'}} ><Link to={'/'} style={{ textDecoration: 'none'}} className='btn mb-3 btn-danger rounded  '>Back to Home</Link></div>

            <img height={'400px'} width={'400px'} src="https://cdn.dribbble.com/users/249246/screenshots/2958948/shopping.gif" alt="" />

          </div>
        
      
      </div>)
      }
    </Row>
  )
}

export default Wishlist