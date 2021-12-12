import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { getAllProducts } from '../../States/products/action';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Product from '../../Components/Home/Product';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import './index.css';

const Home = ({ getAllProducts }) => {
  const { productsShowed } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts, productsShowed]);

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
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <div>you have no products</div>
            )}
            <div className='new-product'>
              <Link to={{ pathname: '/new-product' }}>
                <Button variant='primary' className='new-btn'>
                  New Product
                </Button>
              </Link>
            </div>
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
