import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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
  const isLogin = localStorage.getItem('adminIsLogin');

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            {isLogin ? <Home /> : <Redirect to='/login' />}
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/new-product' exact>
            <NewProduct />
          </Route>
          <Route path='/edit-product/:id' exact>
            <EditProduct />
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
