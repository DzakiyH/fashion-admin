import React, { useState } from 'react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const EditProduct = () => {
  const [registerData, setRegisterData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    stock: '',
  });

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <NavbarLayout>
      <div className='form'>
        <h1>Edit Product</h1>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter product name'
              name='title'
              onChange={onChangeField}
              value={registerData.title}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='product description'
              name='description'
              onChange={onChangeField}
              value={registerData.description}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>image</Form.Label>
            <Form.Control
              type='text'
              placeholder='image file'
              name='image'
              onChange={onChangeField}
              value={registerData.image}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>stock</Form.Label>
            <Form.Control
              type='number'
              placeholder='product stock'
              name='stock'
              onChange={onChangeField}
              value={registerData.stock}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='product price'
              name='price'
              onChange={onChangeField}
              value={registerData.price}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </NavbarLayout>
  );
};

export default EditProduct;
