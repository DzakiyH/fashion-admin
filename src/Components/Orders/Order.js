import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, index }) => {
  return (
    <div className='order'>
      <Link className='id' to={{ pathname: `/order-details/${order.id}` }}>
        <div>{order.id}</div>
      </Link>
      <div className='total'>{order.total_payment}</div>
      <div className='status'>{order.order_status.status}</div>
    </div>
  );
};

export default Order;
