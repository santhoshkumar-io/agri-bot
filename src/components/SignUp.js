import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

const SignUp = ({ language, handleLanguageChange }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Redirect to sign-in page after successful validation
    navigate('/signin');
    // Clear the form data
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    // Show alert for successful sign-up
    alert('Successfully signed up!');
  };

  // Text content based on language
  const textContent = {
    en: {
      signUp: 'Sign Up',
      username: 'Username',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
    },
    ta: {
      signUp: 'பதிவு செய்',
      username: 'பயனர்பெயர்',
      email: 'மின்னஞ்சல்',
      password: 'கடவுச்சொல்',
      confirmPassword: 'கடவுச்சொல் உறுதி செய்யவும்',
    },
  };

  return (
    <div className="min-h-screen bg-[#f1e983]">

      {/* Sign-up form */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          {textContent[language].signUp}
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              {textContent[language].username}
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              {textContent[language].email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              {textContent[language].password}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2">
              {textContent[language].confirmPassword}
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-signup w-full bg-black text-white border border-black hover:bg-white hover:text-black py-2 px-4"
          >
            {textContent[language].signUp}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
