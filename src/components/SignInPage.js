import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

const SignIn = ({ language, handleLanguageChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Redirect to home page after successful validation
    navigate('/chatbot');
    // Clear the form data
    setFormData({
      email: '',
      password: '',
    });
    // Show alert for successful sign-in
    alert('Successfully signed in!');
  };

  // Text content based on language
  const textContent = {
    en: {
      signIn: 'Sign In',
      email: 'Email',
      password: 'Password',
    },
    ta: {
      signIn: 'உள்நுழைய',
      email: 'மின்னஞ்சல்',
      password: 'கடவுச்சொல்',
    },
  };

  return (
    <div className="min-h-screen bg-[#f1e983]">

      {/* Sign-in form */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          {textContent[language].signIn}
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
          <div className="mb-6">
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
          {/* Sign In Button */}
          <button
            type="submit"
            className="btn btn-signup w-full bg-black text-white border border-black hover:bg-white hover:text-black py-2 px-4"
          >
            {textContent[language].signIn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
