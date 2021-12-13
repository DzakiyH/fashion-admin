import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarLayout = (props) => {
  const isLogin = localStorage.getItem('adminIsLogin');

  const logout = () => {
    localStorage.removeItem('AdminToken');
    localStorage.removeItem('adminIsLogin');
    window.location.reload();
  };

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          {isLogin ? (
            <Nav>
              <Nav.Link href='/#' onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      {props.children}
    </>
  );
};

export default NavbarLayout;
