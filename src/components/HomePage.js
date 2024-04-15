import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = ({ language, handleLanguageChange }) => {
 
  const textContent = {
    en: {
      welcomeTitle: "Welcome to Your Agriculture Chatbot",
      welcomeText:
        "Here you can find valuable information and assistance for your farming needs.",
      whyChooseTitle: "Why Choose Our Agriculture Chatbot?",
      whyChooseText:
        "Our agriculture chatbot is designed to provide farmers with instant access to expert advice, weather forecasts, market prices, and farming techniques. With our user-friendly interface and AI-powered algorithms, you can get personalized recommendations tailored to your specific needs. Whether you're a seasoned farmer or just starting out, our chatbot is here to support you every step of the way.",
      footerText: "&copy; 2024 Uzhavu. All rights reserved.",
    },
    ta: {
      welcomeTitle: "உங்கள் விவசாயம் சார்ந்த செய்தியாக்கம் வரவேற்கிறது",
      welcomeText:
        "இங்கு உங்கள் விவசாயம் தேவைகளுக்கு மேம்பட்ட தகவல்கள் மற்றும் உதவியைப் பெறலாம்.",
      whyChooseTitle:
        "எங்கள் விவசாய சார்ந்த செய்தியாக்கம் ஏன் தேர்ந்தெடுக்கவேண்டும்?",
      whyChooseText:
        "எங்கள் விவசாய சார்ந்த செய்தியாக்கம் விரைவில் பயனர்களுக்கு வரையறுக்கப்பட்டுள்ளது: மாணவர் ஆலோசனைகள், வானிலை முன்னணிக்கைகள், சந்தை விலைகள், மற்றும் விவசாய தொழில்நுட்பங்கள்.",
      footerText: "&copy; 2024 உழவு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.",
    },
  };

  console.log(language)

  return (
    <div className="min-h-screen bg-[#f1e983]">
      <div className="container mx-auto py-8">
        <div className="mt-16">
          {/* Top margin added here */}
          {/* Welcome content */}
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">
              {textContent[language].welcomeTitle}
            </h1>
            <p className="text-lg mx-8">
              {textContent[language].welcomeText}
            </p>
          </div>
        </div>
        {/* Sketch */}
        <div className="max-w-xl mx-auto mt-8">
          <img
            src="/Images/your-sketch-image.jpg"
            alt="Sketch Image"
            className="w-full max-w-md mx-auto"
          />
        </div>
        {/* Additional content */}
        <div className="max-w-xl mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {textContent[language].whyChooseTitle}
          </h2>
          <p className="text-lg mx-8">
            {textContent[language].whyChooseText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
