import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import CarSideBar from './CarSideBar';

const NavBarw = () => {
  const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return (
        <> 
        <Navbar bg="light" expand="lg">
        <Container className='container--navbar'>
          <Navbar.Brand as={Link} to='/' ><b className='ecomerce--e'>E</b>-comerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
         <Nav.Link as={Link} to='/login' ><i className='bx bx-user bx-md'></i></Nav.Link>
              <Nav.Link as={Link} to='/purchases' ><i className='bx bx-store bx-md' ></i></Nav.Link>
              <Nav.Link ><i onClick={handleShow} className='bx bx-cart bx-md '></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<CarSideBar handleClose={handleClose} show={show}  handleShow={handleShow} />
      </>

    );
};

export default NavBarw;