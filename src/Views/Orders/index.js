import React, { useEffect } from 'react';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import Order from '../../Components/Orders/Order';
import { getAllOrders } from '../../States/orders/action';
import { useSelector, connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import './index.css';

const Orders = ({ getAllOrders }) => {
  const { orders } = useSelector((state) => state.ordersReducer);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  return (
    <NavbarLayout>
      <div className='orders'>
        <Card>
          <Card.Header>List of Orders</Card.Header>
          <Card.Body>
            <div className='orders-header'>
              <div className='order-id'>id</div>
              <div className='order-total'>total</div>
              <div className='order-status'>status</div>
            </div>
            {
              (orders && orders.length !== 0,
              Object.keys(orders).length !== 0 ? (
                orders.map((order, index) => {
                  return <Order order={order} index={index} key={index} />;
                })
              ) : (
                <div className='no-orders'>there's no order</div>
              ))
            }
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllOrders: () => dispatch(getAllOrders()),
});

export default connect(null, mapDispatchToProps)(Orders);
