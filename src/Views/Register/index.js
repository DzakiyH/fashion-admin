import React, { useState } from 'react';
import axios from 'axios';
import useRouter from 'use-react-router';
import NavbarLayout from '../../Components/Layout/NavbarLayout';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const Register = () => {
  const { history } = useRouter();

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    user_type_id: 2,
  });

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8000/auth/user/register',
        registerData
      );

      if (res.data.code === 201) {
        history.push('/login');
      } else {
        alert('error register');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        alert(err.response.data);
        console.log(err.response.data);
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <NavbarLayout>
      <div className='form'>
        <h1>REGISTER</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={onChangeField}
              value={registerData.name}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={onChangeField}
              value={registerData.password}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your first name'
              name='first_name'
              onChange={onChangeField}
              value={registerData.first_name}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your last name'
              name='last_name'
              onChange={onChangeField}
              value={registerData.last_name}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='number'
              placeholder='Your phone number'
              name='phone_number'
              onChange={onChangeField}
              value={registerData.phone_number}
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

export default Register;
