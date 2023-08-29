import React, { useState } from 'react';
import '../style/home.css';
import product from '../product.json';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

function Home() {
  
  const schema = yup.object().shape({
    fullName : yup.string().required("Full Name must be enter"),
    email: yup.string().required("Email must be enter"),
    age: yup.number().positive().min(18).required("Age must be enter"),
    password: yup.string().min(8).max(20).required("password must be enter"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Password does not match")
  });
  
  const {register , handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  }); 

  const onSubmit =(data)=>{
    console.log(data);
  };

  return (
    <>
      <h1> Form </h1>
      <form onSubmit={handleSubmit(onSubmit)}> 
      <input type="text" placeholder='Full Name' {...register("fullName")} />
      <p> {errors.fullName?.message} </p>
      <input type="text" placeholder='Email' {...register("email")} />
      <p> {errors.email?.message} </p>
      <input type="number" placeholder='Age' {...register("age")} />
      <p> {errors.age?.message} </p>
      <input type="password" placeholder='password' {...register("password")} />
      <p> {errors.password?.message} </p>
      <input type="password" placeholder='Confirm Password' {...register("confirmPassword")} />
      <p> {errors.confirmPassword?.message} </p>
      <input type="submit" />
      </form>
    </>
  );
}

export default Home;
