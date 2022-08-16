import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const WebsiteNav = () =>
{
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Furni</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='ml-auto'>
          <Nav className='me-auto' >
          </Nav>
          <Nav>
            <Nav.Link className='mx-2' href="/home">Home</Nav.Link>
            <Nav.Link className='mx-2 text-link' href="/products">Products</Nav.Link>
            <Nav.Link className='mx-2 text-link' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebsiteNav