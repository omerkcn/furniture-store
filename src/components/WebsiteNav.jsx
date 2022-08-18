import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const WebsiteNav = () =>
{
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/">Furni</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='ml-auto'>
          <Nav className='me-auto' >
          </Nav>
          <Nav>
            <Nav.Link className='mx-2' href="/">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Salon Set"><i class="fa-solid fa-couch me-2" style={ { color: '#00b2b9' } }></i>Salon Set</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#lamps">
                <i className="fa-solid fa-lightbulb me-2" style={ { color: 'yellowgreen' } }></i> Lamps
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Vase"><i class="fa-solid fa-flask-vial me-2" style={ { color: '#633d04' } }></i>Vase</NavDropdown.Item>


            </NavDropdown>
            <Nav.Link className='mx-2 text-link' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebsiteNav