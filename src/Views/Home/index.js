import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Product from '../../Components/Home/Product';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import './index.css';

const index = () => {
  return (
    <NavbarLayout>
      <div className='home'>
        <Card>
          <Card.Header>List of Products</Card.Header>
          <Card.Body>
            <Product />
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default index;
