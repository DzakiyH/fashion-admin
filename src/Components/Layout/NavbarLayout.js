import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarLayout = (props) => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
};

export default NavbarLayout;
