// src/Login.js
import React, { useState } from 'react';
import "./login.css"
const Login = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    // For now, just redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Number:
          <input type="number" value={number} onChange={(event) => setNumber(event.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;