import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { getAllProducts } from './States/products/action';
import { getAllOrders } from './States/orders/action';
import { connect } from 'react-redux';
import Login from './Views/Login';
import Register from './Views/Register';
import Home from './Views/Home';
import EditProduct from './Views/EditProduct';
import Orders from './Views/Orders';
import OrderDetails from './Views/OrderDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProduct from './Views/NewProduct';

const App = ({ getAllProducts, getAllOrders }) => {
  const [isLogin, setIsLogin] = useState(true);
  const token = localStorage.getItem('AdminToken');

  useEffect(() => {
    getAllProducts();
    getAllOrders();
  }, [getAllProducts, getAllOrders]);

  useEffect(() => {
    if (token) {
      jwt.verify(token, process.env.REACT_APP_SECRET_TOKEN, (err, decoded) => {
        if (err) {
          localStorage.removeItem('AdminToken');
          localStorage.removeItem('adminIsLogin');
          alert(`there's an error in authentication`);
          setIsLogin(false);
        } else if (decoded) {
          setIsLogin(true);
        }
      });
    } else {
      localStorage.removeItem('AdminToken');
      localStorage.removeItem('adminIsLogin');
      setIsLogin(false);
    }
  }, [token]);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            {isLogin ? <Home /> : <Redirect to='/login' />}
          </Route>
          <Route path='/login' exact>
            {isLogin ? <Redirect to='/' /> : <Login setIsLogin={setIsLogin} />}
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/new-product' exact>
            {isLogin ? <NewProduct /> : <Redirect to='/login' />}
          </Route>
          <Route path='/edit-product/:id' exact>
            {isLogin ? <EditProduct /> : <Redirect to='/login' />}
          </Route>
          <Route path='/orders' exact>
            {isLogin ? <Orders /> : <Redirect to='/login' />}
          </Route>
          <Route path='/order-details/:id' exact>
            {isLogin ? <OrderDetails /> : <Redirect to='/login' />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getAllOrders: () => dispatch(getAllOrders()),
});

export default connect(null, mapDispatchToProps)(App);
