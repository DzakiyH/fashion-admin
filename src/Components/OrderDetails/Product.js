import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='product-name'>
        <img src={product.product.image} alt='product' className='image' />
        <div className='name'>
          <span>{product.product.title}</span>
        </div>
      </div>
      <div className='product-quantity'>
        <span>{product.quantity}</span>
      </div>
    </div>
  );
};

export default Product;
