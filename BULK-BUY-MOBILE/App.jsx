import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUpForm from './Signup';
import LoginForm from './Login';
import ForgotPasswordForm from './Forgot';
import Home from './Home';
import Profile from './Profile'
import Products from './Products'
import Cart from './Cart'
import History from './History'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignUpForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Forgot" element={<ForgotPasswordForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
