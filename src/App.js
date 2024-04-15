import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignInPage";
import ChatPage from "./components/ChatPage";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
      <div>
        <Navbar language={language} handleLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Home language={language} handleLanguageChange={handleLanguageChange}/>} />
          <Route path="/signup" element={<SignUp language={language} handleLanguageChange={handleLanguageChange} />} />
          <Route path="/signin" element={<SignIn language={language} handleLanguageChange={handleLanguageChange} />} />
          <Route path="/chatbot" element={<ChatPage language={language} handleLanguageChange={handleLanguageChange} />} />

        </Routes>
        {/* Footer */}
        <Footer language={language} />
      </div>
  );
}

export default App;
