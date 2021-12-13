import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { getAllProducts } from './States/products/action';
import { connect } from 'react-redux';
import Login from './Views/Login';
import Register from './Views/Register';
import Home from './Views/Home';
import EditProduct from './Views/EditProduct';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProduct from './Views/NewProduct';

const App = ({ getAllProducts }) => {
  const [isLogin, setIsLogin] = useState(true);
  const token = localStorage.getItem('AdminToken');

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    if (token) {
      jwt.verify(token, process.env.REACT_APP_SECRET_TOKEN, (err, decoded) => {
        if (err && err.message === 'jwt expired') {
          localStorage.removeItem('AdminToken');
          localStorage.removeItem('adminIsLogin');
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
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
});

export default connect(null, mapDispatchToProps)(App);
