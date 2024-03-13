import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist=useSelector((state)=>state.wish)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar  style={{width:'100%',top:'0',zIndex:"10"}}  expand="lg" className="bg-body-tertiary fixed-top ">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{fontWeight:'bold', color:'blueviolet',textDecoration:'none'}}>E-Cart &nbsp;<i class="fa-solid fa-truck-fast fa-bounce"></i> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishList'} style={{fontWeight:'bold', color:'blueviolet',textDecoration:'none'}}><i class="fa-solid fa-heart fa-beat-fade"></i> Wishlist</Link> 
            <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
            </Nav.Link>
            <Nav.Link ><Link to={'/cart'} style={{fontWeight:'bold', color:'blueviolet',textDecoration:'none'}}><i class="fa-solid fa-cart-shopping text-success"></i> Cart</Link>
            <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header