import React, { useState } from 'react';
import axios from 'axios';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const Login = ({ setIsLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onChangeField = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_HOST}/auth/admin/login`,
        loginData
      );

      if (res.data.code === 200) {
        localStorage.setItem('adminIsLogin', JSON.stringify(true));
        localStorage.setItem('AdminToken', res.data.data.access_token);

        setIsLogin(true);
      } else {
        alert('error login');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <NavbarLayout>
      <div className='form'>
        <h1>LOGIN</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              value={loginData.email}
              onChange={onChangeField}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              value={loginData.password}
              onChange={onChangeField}
            />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </NavbarLayout>
  );
};

export default Login;
