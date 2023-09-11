import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import instance from '../../axios';
import './Signup.css';


function Signup() {

  const userSchema = yup.object().shape({
    userName:yup.string().required("Please enter your userName"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(5).max(10).required("Please enter your password")
  });
  
  const {handleSubmit, register, formState:{errors}} = useForm({
    resolver:yupResolver(userSchema)
  });
  const formSubmit = (data)=>{
    console.log(data);
    instance.post('http://localhost:4000/api/v1/userRegister', data)
  }

  return (
    <div className='form-box'>
      <h1>Signup</h1>
    <Form onSubmit={handleSubmit(formSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <label className='required'>Username</label>
        <Form.Control type="text" placeholder="Enter User-Name" {...register("userName")}/>
        <p style={{color:'red'}}>{errors.userName?.message}</p>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <label className='required'>Email address</label>
        <Form.Control type="email" placeholder="Enter email"{...register("email")} />
        <p style={{color:'red'}}>{errors.email?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <label className='required'>Password</label>
        <Form.Control type="password" placeholder="Password"{...register("password")} />
        <p style={{color:'red'}}>{errors.password?.message}</p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Signup;