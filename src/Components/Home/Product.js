import React from 'react';
import { BiDetail, BiTrash } from 'react-icons/bi';

const Product = () => {
  return (
    <div className='product'>
      <div className='product-name'>
        <img
          src='https://pbs.twimg.com/media/C2-eHBHWIAAWdq9.jpg'
          alt='product'
        />
        <span className='name'>product name</span>
      </div>
      <span className='price'>price</span>
      <BiDetail className='detail' />
      <BiTrash className='delete' />
    </div>
  );
};

export default Product;
