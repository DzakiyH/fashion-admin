import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getAllProducts } from '../../States/products/action';
import { Card, Button } from 'react-bootstrap';
import Product from '../../Components/Home/Product';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import './index.css';

const Home = (props) => {
  const { getAllProducts } = props;
  const { productsShowed } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <NavbarLayout>
      <div className='home'>
        <Card>
          <Card.Header>List of Products</Card.Header>
          <Card.Body>
            <div className='products-headers'>
              <div className='product-name'>name</div>
              <div className='quantity'>quantity</div>
              <div className='price'>price</div>
              <div className='details'>details</div>
              <div className='remove'>remove</div>
            </div>
            {productsShowed &&
            productsShowed.length !== 0 &&
            Object.keys(productsShowed).length !== 0 ? (
              productsShowed.map((product) => {
                return <Product product={product} />;
              })
            ) : (
              <div>you have no products</div>
            )}
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </NavbarLayout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
});

export default connect(null, mapDispatchToProps)(Home);
