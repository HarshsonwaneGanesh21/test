// src/App.js
import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
const App = () => {
  return (
    <>
       <Dashboard/>
    </>

  );
};

export default App;