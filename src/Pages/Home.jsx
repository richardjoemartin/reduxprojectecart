import React from 'react'
import { Row,Col,Card } from 'react-bootstrap';
import './Home.css';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
 const data = useFetch("https://dummyjson.com/products")
// console.log(data);
const dispatch =useDispatch()
  return (
   <Row className='ms-5' style={{marginTop:'100px' ,height:'5000px'}}>
    {
      data?.length>0.?data?.map((products,index)=>(
      <Col key={index} className='mb-5' sm={12} lg={4} xl={3}>
    
      <Card  className='custom-shadow rounded ' style={{marginLeft:'-3%', width: '16.5rem' ,height:'35rem'}}>
      <Card.Img style={{height:'260px'}} variant="top" src={products.thumbnail} />
      <Card.Body>
        <Card.Title style={{fontSize:'13px'}}><b>{products.title}</b></Card.Title>
        <Card.Text>
          {products.description.slice(0,45)}...
        </Card.Text>
        <Card.Text>
         $ {products.price}
         <br /><br /><br /><br />

        </Card.Text>
        
        <div className='d-flex justify-content-between '>
        <button className='btn btn-dark' onClick={()=>dispatch(addToWishlist(products))}><i className='fa-solid fa-heart text-danger fa-2x'></i></button>
        <button className='btn btn-dark' onClick={()=>dispatch(addToCart(products))}><i className='fa-solid fa-cart-shopping text-success fa-2x '></i></button>

        </div>
      </Card.Body>
    </Card>
    
    </Col>
    )):<p className='text-dnger fs-4 fw-bolder'>Nothing to Display</p>
    }
   </Row>
  )
}

export default Home