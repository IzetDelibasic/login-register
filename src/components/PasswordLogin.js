import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterLogin from './RegisterLogin';
import HomeScreen from './HomeScreen';

function PasswordLogin() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterLogin />} />
          <Route path="/home" element={<HomeScreen />} /> 
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default PasswordLogin;


