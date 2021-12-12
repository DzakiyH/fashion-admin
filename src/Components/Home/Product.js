import React from 'react';
import { BiDetail, BiTrash } from 'react-icons/bi';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='product-name'>
        <img src={product.image} alt='product' />
        <span className='name'>{product.title}</span>
      </div>
      <div className='quantity'>{product.stock}</div>
      <div className='price'>{product.price}</div>
      <BiDetail className='detail' />
      <BiTrash className='delete' />
    </div>
  );
};

export default Product;
