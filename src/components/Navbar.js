import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ language, handleLanguageChange }) => {
  // Function to handle language change
  const handleChange = (e) => {
    handleLanguageChange(e.target.value);
  };

  // Text content based on language
  const textContent = {
    en: {
      home: "Home",
      signIn: "Sign In",
      signUp: "Sign Up",
      logo: "Uzhavu",
    },
    ta: {
      home: "முகப்பு",
      signIn: "உள்நுழைய",
      signUp: "பதிவு செய்",
      logo: "உழவு",
    },
  };

  return (
    <div className="bg-black text-white py-4 px-6 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">{textContent[language]?.logo}</div>
        {/* Navigation links */}
        <div className="space-x-4">
          <Link to="/" className="btn">
            {textContent[language]?.home}
          </Link>
          <Link to="/signin" className="btn">
            {textContent[language]?.signIn}
          </Link>
          <Link to="/signup" className="btn">
            {textContent[language]?.signUp}
          </Link>
          {/* Language selector dropdown */}
          <select
            className="px-4 py-2 rounded bg-gray-800 text-white"
            value={language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
