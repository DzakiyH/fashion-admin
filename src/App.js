import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Views/Login';
import Register from './Views/Register';
import Home from './Views/Home';
import EditProduct from './Views/EditProduct';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/edit-product' exact>
            <EditProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
