import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login'; // Login component
import Register from './Register'; // Register component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
