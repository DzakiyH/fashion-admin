import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useRouter from 'use-react-router';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import Product from '../../Components/OrderDetails/Product';
import './index.css';

const OrderDetails = () => {
  const { history } = useRouter();
  const [resi, setResi] = useState({
    resiNumber: '',
  });
  const { id } = useParams();
  const { orders, orderProducts } = useSelector((state) => state.ordersReducer);
  let product = {};
  let index = 0;

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === id) {
      index = i;
    }
  }

  product = orderProducts[index];

  const onChangeField = (e) => {
    setResi({
      ...resi,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!resi.resiNumber || resi.resiNumber === '') {
      alert('input the resi number');
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/order/update-order`,
        {
          id,
          resiNumber: resi.resiNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('AdminToken')}`,
          },
        }
      );

      if (res.data.code === 201) {
        alert('successfully updated data');
        history.push('/orders');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <NavbarLayout>
      <div className='order-details'>
        <Card>
          <Card.Header>{`Order - ${id}`}</Card.Header>
          <Card.Body>
            <div className='details'>
              <div className='details-products'>
                <div className='products-header'>
                  <div className='header-name'>name</div>
                  <div className='header-quantity'>quantity</div>
                </div>
                {product &&
                Object.keys(product).length !== 0 &&
                product.length !== 0 ? (
                  product.map((item) => {
                    return <Product key={item.id} product={item} />;
                  })
                ) : (
                  <div className='no-product'>retrieving data</div>
                )}
              </div>
            </div>
            <div className='input-resi'>
              <label htmlFor='resiNumber'>input resi</label>
              <input
                type='text'
                name='resiNumber'
                id='resiNumber'
                onChange={onChangeField}
              />
            </div>
            <div className='navigation-btn'>
              <Link to={{ pathname: '/orders' }}>
                <Button variant='danger'>Back</Button>
              </Link>
              <Button variant='primary' onClick={onSubmit}>
                Update
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

export default OrderDetails;
