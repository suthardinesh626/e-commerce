import React, { useState } from 'react';
import '../style/home.css';
import product from '../product.json';

function Home() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <form>
        <input name='firstName' type="text" onChange={handleChange} placeholder='First Name' />
        <input name='lastName' type="text" onChange={handleChange} placeholder='Last Name' />
        
      </form>
    </>
  );
}

export default Home;
