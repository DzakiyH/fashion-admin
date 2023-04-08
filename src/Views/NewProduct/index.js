import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useRouter from 'use-react-router';
import axios from 'axios';
import { IKContext, IKUpload } from 'imagekitio-react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const NewProduct = () => {
  const { products } = useSelector((state) => state.productsReducer);
  const { history } = useRouter();

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    stock: '',
    category_id: 0,
  });

  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint =
    process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT;

  const onChangeField = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const onError = (err) => {
    console.log(err);
  };

  const onSuccess = (res) => {
    setProductData({
      ...productData,
      image: res.url,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await axios.post(
        `https://${process.env.REACT_APP_SERVER_HOST}/product/new-product`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AdminToken')}`,
          },
        }
      );

      if (request.data.code === 201) {
        alert('product has been successfully created!');
        history.push('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <NavbarLayout>
      <div className='form'>
        <h1>Edit Product</h1>
        {products &&
        products.length !== 0 &&
        Object.keys(products).length !== 0 ? (
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter product name'
                name='title'
                onChange={onChangeField}
                value={productData.title}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='product description'
                name='description'
                onChange={onChangeField}
                value={productData.description}
              />
            </Form.Group>

            <Form.Group className='mb-3 image'>
              {productData.image !== '' ? (
                <div className='current-image'>
                  <div>current image:</div>
                  <div
                    className='image'
                    style={{
                      backgroundImage: `url("${productData.image}")`,
                      width: '100px',
                      height: '150px',
                      backgroundSize: 'contain',
                    }}
                  ></div>
                </div>
              ) : null}
              <IKContext
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                authenticationEndpoint={authenticationEndpoint}
              >
                <Form.Label>choose product image</Form.Label>
                <br />
                <IKUpload
                  fileName='test-image.jpg'
                  onError={onError}
                  onSuccess={onSuccess}
                />
              </IKContext>
              <div className='notice'>
                *the image you upload will appear above after some time
              </div>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='product stock'
                name='stock'
                onChange={onChangeField}
                value={productData.stock}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Product Price (in $)</Form.Label>
              <Form.Control
                type='number'
                placeholder='product price'
                name='price'
                onChange={onChangeField}
                value={productData.price}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label='category'
                name='category_id'
                onChange={onChangeField}
              >
                <option>Choose a category</option>
                <option value='1'>Clothes</option>
                <option value='2'>Footwear</option>
                <option value='3'>Headwear</option>
                <option value='4'>HandWear</option>
              </Form.Select>
            </Form.Group>

            <div className='buttons'>
              <Link to={{ pathname: '/' }}>
                <Button variant='danger' type='submit'>
                  Back
                </Button>
              </Link>
              <Button variant='primary' type='submit' onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        ) : (
          <div>retrieving data</div>
        )}
      </div>
    </NavbarLayout>
  );
};

export default NewProduct;
